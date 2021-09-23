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

function UserProfile(props) {
    const {
        mode, 
        profileData, 
        favoritesData, 
        dispatch, 
        logoutUser, 
        history,
        removeAll,
        albumsData,
    } = props

    const [page, setPage] = useState('favorites')

    // console.log(albumsData.id)

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
                        <img src='https://via.placeholder.com/150/771796' alt='avatar' />
                    </div>
                    <div className='user'>
                        <span className='welcome'>Welcome, </span>
                        <span className='name'>Chelsey Dietrich</span>
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
                        <span>Favorites</span>
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
                <TabContent active={page==='favorites'}>
                    {checkObjectLength(favoritesData) ? (
                        <PhotoCard photosData={favoritesData} /> 
                    ): (<Alert>No data found</Alert>)}
                </TabContent>
                <TabContent active={page==='albums'}>
                    <AlbumCard 
                        albumData={albumsData}
                        nopadding 
                        mode='profile' 
                    />
                </TabContent>
                <TabContent active={page==='profile'}>
                    <ProfileDataContainer>
                        <ProfileData>
                            <span className='title'>Username</span>
                            <span className='content'>Bret</span>
                        </ProfileData>
                        <ProfileData>
                            <span className='title'>email</span>
                            <span className='content'>Sincere@april.biz</span>
                        </ProfileData>
                        <ProfileData>
                            <span className='title'>address</span>
                            <span className='content'>Kulas Light Apt. 556, Gwenborough 92998-3874</span>
                        </ProfileData>
                        <ProfileData>
                            <span className='title'>phone</span>
                            <span className='content'>1-770-736-8031 x56442</span>
                        </ProfileData>
                        <ProfileData>
                            <span className='title'>company</span>
                            <span className='content'>Romaguera-Crona</span>
                        </ProfileData>
                        <ProfileData>
                            <span className='title'>website</span>
                            <span className='content'>hildegard.org</span>
                        </ProfileData>
                    </ProfileDataContainer>
                </TabContent>
            </ProfileContainer>
        </MainLayout>
    );
}

export default UserProfile;