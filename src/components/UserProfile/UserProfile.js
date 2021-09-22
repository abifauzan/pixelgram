import React, { useState } from 'react';
import { ProfileContainer, Profile, TabHeader, TabItem, TabContent, ProfileDataContainer, ProfileData } from './UserProfileStyle';
import { IoLogOutOutline } from 'react-icons/io5'
import { MdFavoriteBorder } from 'react-icons/md'
import { BsGrid3X3 } from 'react-icons/bs'
import { RiUserLine } from 'react-icons/ri'
import MainLayout from '../Layout/Layout';
import PhotoCard from '../PhotoCard/PhotoCard';
import AlbumCard from '../AlbumCard/AlbumCard';

function UserProfile({ mode, data }) {
    const [page, setPage] = useState('favorites')

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
                    <button>
                        <IoLogOutOutline />
                    </button>
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
                    <TabItem
                        active={page==='profile'}
                        onClick={() => setPage('profile')}
                    >
                        <RiUserLine />
                        <span>Profile</span>
                    </TabItem>
                </TabHeader>
                <TabContent active={page==='favorites'}>
                    <PhotoCard />
                </TabContent>
                <TabContent active={page==='albums'}>
                    <AlbumCard 
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