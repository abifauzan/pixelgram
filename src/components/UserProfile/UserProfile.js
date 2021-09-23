import React, { useState } from 'react';
import { ProfileContainer, Profile, TabHeader, TabItem, TabContent, ProfileDataContainer, ProfileData } from './UserProfileStyle';
import { IoLogOutOutline } from 'react-icons/io5'
import { MdFavoriteBorder } from 'react-icons/md'
import { BsGrid3X3 } from 'react-icons/bs'
import { RiUserLine } from 'react-icons/ri'
import MainLayout from '../Layout/Layout';
import PhotoCard from '../PhotoCard/PhotoCard';
import AlbumCard from '../AlbumCard/AlbumCard';
import Alert from '../Alert/Alert';
import { checkObjectLength } from '../../helpers/helpers';
import usePhotoToAlbum from '../../hooks/usePhotoToAlbum';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectProfile,
    logoutUser,
} from '../../redux/profileSlice'
import {
    removeAll,
    selectfavorites,
} from '../../redux/favoriteSlice'
import { useHistory } from 'react-router';
import Loading from '../Loading/Loading';

function UserProfile(props) {
    const {
        mode = 'default', 
        profileData, 
        favoritesData, 
        albumsData,
        filteredPhoto,
    } = props

    const dispatch = useDispatch()
    const history = useHistory()

    const [page, setPage] = useState('favorites')
    
    // console.log('profileData', profileData)

    const handleLogout = () => {
        dispatch(logoutUser())
        dispatch(removeAll())
        history.push('/')
    }

    return (
        <MainLayout nopadding>
            <ProfileContainer>
                <Profile>
                    <div className='avatar'>
                        <img src='https://i.pravatar.cc/300' alt='avatar' />
                    </div>
                    <div className='user'>
                        {/* <span className='welcome'>Welcome, </span> */}
                        <span className='name'>{profileData?.name}</span>
                        <span className='email'>{profileData?.email}</span>
                    </div>
                    {mode === 'profile' && (
                        <button onClick={handleLogout}>
                            <IoLogOutOutline />
                        </button>
                    )}
                    
                </Profile>
                <TabHeader mode={mode}>
                    <TabItem 
                        active={page==='favorites'}
                        onClick={() => setPage('favorites')}
                    >
                        <MdFavoriteBorder />
                        <span>{mode === 'profile' ? 'Favorites' : 'Photos'}</span>
                    </TabItem>
                    <TabItem
                        active={page==='albums'}
                        onClick={() => setPage('albums')}
                    >
                        <BsGrid3X3 />
                        <span>Albums</span>
                    </TabItem>
                    {mode === 'profile' && (
                        <TabItem
                            active={page==='profile'}
                            onClick={() => setPage('profile')}
                        >
                            <RiUserLine />
                            <span>Profile</span>
                        </TabItem>
                    )}
                    
                </TabHeader>
                {mode === 'profile' ? (
                    <TabContent active={page==='favorites'}>
                        {favoritesData.length > 0 ? (
                            <PhotoCard photosData={favoritesData} /> 
                        ): (<Alert>No data found</Alert>)}
                    </TabContent>
                ) : (
                    <TabContent active={page==='favorites'}>
                        {filteredPhoto !== undefined ? (
                            <PhotoCard photosData={filteredPhoto} /> 
                        ): (<Loading />)}
                    </TabContent>
                )}
                
                <TabContent active={page==='albums'}>
                    <AlbumCard 
                        albumData={albumsData}
                        nopadding 
                        mode='profile' 
                    />
                </TabContent>
                {mode === 'profile' && (
                    <TabContent active={page==='profile'}>
                        {profileData !== undefined ? (
                            <ProfileDataContainer>
                                <ProfileData>
                                    <span className='title'>Username</span>
                                    <span className='content'>{profileData.username}</span>
                                </ProfileData>
                                <ProfileData>
                                    <span className='title'>email</span>
                                    <span className='content'>{profileData.email}</span>
                                </ProfileData>
                                <ProfileData>
                                    <span className='title'>address</span>
                                    <span className='content'>{`${profileData.address.street} ${profileData.address.suite} ${profileData.address.city}, ${profileData.address.zipcode}`}</span>
                                </ProfileData>
                                <ProfileData>
                                    <span className='title'>phone</span>
                                    <span className='content'>{profileData.phone}</span>
                                </ProfileData>
                                <ProfileData>
                                    <span className='title'>company</span>
                                    <span className='content'>{profileData.company.name}</span>
                                </ProfileData>
                                <ProfileData>
                                    <span className='title'>website</span>
                                    <span className='content'>{profileData.website}</span>
                                </ProfileData>
                            </ProfileDataContainer>
                        ) : (<Loading />)}
                        
                    </TabContent>
                )}
                
            </ProfileContainer>
        </MainLayout>
    );
}

export default UserProfile;