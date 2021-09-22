import React from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import {
    selectProfile,
    logoutUser,
} from '../../redux/profileSlice'
import { useSelector, useDispatch } from 'react-redux';
import { checkObjectLength } from '../../helpers/helpers';
import Loading from '../../components/Loading/Loading';
import { useHistory } from 'react-router';

function Profile() {

    const history = useHistory()

    const profileData = useSelector(selectProfile)
    const dispatch = useDispatch()

    return (
        <UserProfile 
            mode='profile' 
            data={profileData}
            dispatch={dispatch}
            logoutUser={logoutUser}
            history={history}
        />
    )
}

export default Profile;