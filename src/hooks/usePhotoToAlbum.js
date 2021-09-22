import React, { useState, useEffect } from 'react';
import {
    useGetUsersQuery,
    useGetAlbumsQuery,
    useGetPhotosQuery,
} from '../services/albumApi'
import { checkObjectLength } from '../helpers/helpers';

function usePhotoToAlbum({albumId, isThumbnail}) {
    const [data, setData] = useState([])

    const fetchPhotos = useGetPhotosQuery()

    useEffect(() => {
        if (!fetchPhotos.isLoading && fetchPhotos.data.length > 0) {
            if (isThumbnail) {
                const dataFiltered = fetchPhotos.data.filter(el => el.albumId === albumId).slice(0,3)
                setData(dataFiltered)
            } else {
                const dataFiltered = fetchPhotos.data.filter(el => el.albumId === albumId)
                setData(dataFiltered)
            }
            
        }
    }, [albumId, fetchPhotos, isThumbnail])

    return {
        data
    }
}

export default usePhotoToAlbum;