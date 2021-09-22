import React, { useState, useEffect } from 'react';
import {
    albumApi
} from '../services/albumApi'

function useAlbumToPhoto({ albumId }) {
    const [data, setData] = useState({})

    const { data: dataAlbums, error, isLoading } = albumApi.endpoints.getAlbums.useQueryState()


    useEffect(() => {
        if (isLoading === false && dataAlbums !== undefined && dataAlbums.length > 0) {
            const dataFiltered = dataAlbums.find(el => el.id === Number(albumId))
            setData(dataFiltered)
        }
    }, [albumId, dataAlbums, isLoading])

    return {
        data
    }
}

export default useAlbumToPhoto;