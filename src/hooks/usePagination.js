import { useState, useEffect } from 'react';

function usePagination({ dataset }) {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [totalResult, setTotalResult] = useState(0)
    const [fetch, setFetch] = useState(false)

    const limit = 10

    useEffect(() => {
        if (dataset.length > limit) {
            setData([...dataset.slice(0, limit)])
            setTotalResult(dataset.length)
        } else {
            setData(dataset)
        }
    }, [dataset])

    useEffect(() => {
        let fetchTimeout = null
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200) {

                if(page <= Math.ceil(totalResult / limit)) {
                    setFetch(true)
                    setPage(page+1)

                    fetchTimeout = setTimeout(() => {
                        setPage(page+1)
                        setData((prev) => [...prev, ...dataset.slice(data.length, (page+1)*limit)])
                        setFetch(false)
                    }, 1000);
                }
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
            clearTimeout(fetchTimeout)
        }
    }, [page, data, fetch, totalResult, dataset])

    return {
        data,
        fetch,
    }
}

export default usePagination;