import React, { useState, useEffect } from 'react';
import {
    useGetUsersQuery,
    useGetAlbumsQuery,
    useGetPhotosQuery,
} from '../services/albumApi'
import { checkObjectLength } from '../helpers/helpers';

function useUserToAlbum({userId}) {
    const [data, setData] = useState({})

    const fetchUsers = useGetUsersQuery()

    useEffect(() => {
        if (!fetchUsers.isLoading && fetchUsers.data.length > 0) {
            const dataFiltered = fetchUsers.data.filter(el => el.id === userId)
            const obj = {
                id: dataFiltered[0].id,
                name: dataFiltered[0].name,
            }
            setData(obj)
        }
    }, [userId, fetchUsers])

    return {
        data
    }
}

export default useUserToAlbum;