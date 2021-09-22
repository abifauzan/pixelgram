import React, { useState, useEffect } from 'react';
import {
    albumApi
} from '../services/albumApi'

function usePhotoToAlbum({albumId, isThumbnail = false}) {
    const [data, setData] = useState([])

    const { data: dataPhotos, error, isLoading } = albumApi.endpoints.getPhotos.useQueryState()

    useEffect(() => {
        if (isLoading === false && dataPhotos !== undefined && dataPhotos.length > 0) {
            if (isThumbnail) {
                const dataFiltered = dataPhotos.filter(el => el.albumId === Number(albumId)).slice(0,3)
                setData(dataFiltered)
            } else {
                const dataFiltered = dataPhotos.filter(el => el.albumId === Number(albumId))
                setData(dataFiltered)
            }
            
        }
    }, [albumId, dataPhotos, isThumbnail, isLoading])

    return {
        data
    }
}

export default usePhotoToAlbum;