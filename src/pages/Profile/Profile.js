import React from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import {
    selectProfile,
    logoutUser,
} from '../../redux/profileSlice'
import {
    removeAll,
    selectfavorites,
} from '../../redux/favoriteSlice'
import { albumApi } from '../../services/albumApi'
import { useSelector, useDispatch } from 'react-redux';
import { checkObjectLength } from '../../helpers/helpers';
import Loading from '../../components/Loading/Loading';
import { useHistory } from 'react-router';
import useAlbumToUser from '../../hooks/useAlbumToUser';
import usePhotoToAlbum from '../../hooks/usePhotoToAlbum';

function Profile() {

    const history = useHistory()

    const profileData = useSelector(selectProfile)
    const favoritesData = useSelector(selectfavorites)
    const dispatch = useDispatch()

    const { data: albumsData } = useAlbumToUser({ userId: profileData.id})

    return (
        <UserProfile 
            mode='profile' 
            profileData={profileData}
            favoritesData={favoritesData}
            dispatch={dispatch}
            logoutUser={logoutUser}
            history={history}
            removeAll={removeAll}
            albumsData={albumsData}
        />
    )
}

export default Profile;