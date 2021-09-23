import React from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import { useHistory, useParams } from 'react-router';
import { albumApi } from '../../services/albumApi'
import { useSelector, useDispatch } from 'react-redux';
import useAlbumToUser from '../../hooks/useAlbumToUser';
import Loading from '../../components/Loading/Loading';

function UserPage(props) {

    const history = useHistory()
    const { username } = useParams()
    const dispatch = useDispatch()

    const { data: dataUsers} = albumApi.endpoints.getUsers.useQueryState()
    const { data: dataPhotos} = albumApi.endpoints.getPhotos.useQueryState()
    const profileData = dataUsers?.find(el => el.username === username)
    
    const { data: albumsData } = useAlbumToUser({ userId: profileData?.id})
    const filteredPhoto = dataPhotos?.filter(({ albumId }) => albumsData.some(({ id }) => albumId === id))
    
    // console.log(filteredPhoto)
    // return <Loading />

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