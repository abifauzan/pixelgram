import React, { useState, useEffect } from 'react';

function usePagination({ dataset }) {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(0)
    const [totalResult, setTotalResult] = useState(0)
    const [fetch, setFetch] = useState(false)

    const limit = 10

    useEffect(() => {
        if (dataset.length > limit) {
            setData([...dataset.slice(0, limit)])
            setTotalResult(dataset.length)
            // setStart(0)
            // setEnd(limit)
        }
    }, [])

    useEffect(() => {
        let fetchTimeout = null
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {

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

        // console.log(fetch)
        // console.log(page)
        console.log(data)

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