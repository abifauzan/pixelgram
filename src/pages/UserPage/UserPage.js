import React from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import { useHistory, useParams } from 'react-router';
import { albumApi } from '../../services/albumApi'
import { useDispatch } from 'react-redux';
import useAlbumToUser from '../../hooks/useAlbumToUser';

function UserPage(props) {

    const history = useHistory()
    const { username } = useParams()
    const dispatch = useDispatch()

    // Fetch API cache
    const { data: dataUsers} = albumApi.endpoints.getUsers.useQueryState()
    const { data: dataPhotos} = albumApi.endpoints.getPhotos.useQueryState()

    // Get user data
    const profileData = dataUsers?.find(el => el.username === username)
    
    // Get All Photos related to user
    const { data: albumsData } = useAlbumToUser({ userId: profileData?.id})
    const filteredPhoto = dataPhotos?.filter(({ albumId }) => albumsData.some(({ id }) => albumId === id))

    return (
        <UserProfile 
            profileData={profileData}
            dispatch={dispatch}
            history={history}
            albumsData={albumsData}
            filteredPhoto={filteredPhoto}
        />
    )
}

export default UserPage;