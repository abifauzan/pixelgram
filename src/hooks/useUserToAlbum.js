import React, { useState, useEffect } from 'react';
import {
    albumApi
} from '../services/albumApi'

function useUserToAlbum({userId}) {
    const [data, setData] = useState({})

    const { data: dataUsers, error, isLoading } = albumApi.endpoints.getUsers.useQueryState()

    useEffect(() => {
        if (isLoading === false && dataUsers !== undefined && dataUsers.length > 0 && userId !== undefined) {
            const dataFiltered = dataUsers.filter(el => el.id === userId)
            const obj = {
                id: dataFiltered[0].id,
                name: dataFiltered[0].name,
            }
            setData(obj)
        }
    }, [userId, dataUsers, isLoading])

    return {
        data
    }
}

export default useUserToAlbum;