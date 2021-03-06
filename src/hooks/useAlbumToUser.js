import React, { useState, useEffect } from 'react';
import {
    albumApi
} from '../services/albumApi'

function useAlbumToUser({ userId }) {
    const [data, setData] = useState([])

    const { data: dataAlbums, error, isLoading } = albumApi.endpoints.getAlbums.useQueryState()

    useEffect(() => {
        if (isLoading === false && dataAlbums !== undefined && dataAlbums.length > 0 && userId !== undefined) {
            const dataFiltered = dataAlbums.filter(el => el.userId === Number(userId))
            setData(dataFiltered)
        }
    }, [userId, dataAlbums, isLoading])

    return {
        data
    }
}

export default useAlbumToUser