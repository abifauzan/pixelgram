import React, { useState } from 'react';
import {
    useGetUsersQuery,
    useGetAlbumsQuery,
    useGetPhotosQuery,
} from '../services/albumApi'



function useAlbumRelations(mode) {
    const [albumData, setAlbumData] = useState([])

    const fetchAlbums = useGetAlbumsQuery()
    const fetchPhotos = useGetPhotosQuery()
    const fetchUsers = useGetUsersQuery()

    const getPhotosRelation = (albumId) => {
        const data = []
    
        
    }

    return (
        <div>
            
        </div>
    );
}

export default useAlbumRelations;