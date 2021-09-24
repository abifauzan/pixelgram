import React, { useState, useEffect } from 'react';
import { Flex, Container } from '../../components/Layout/Layout';
import { Link } from 'react-router-dom';
import glasses_img from '../../assets/image/glasses.png'
import {
    LogoStyled,
    HeroCaption,
    HeroSubCaption,
    SplashContainer,
    AvatarGrid,
    AvatarItem,
    SearchQueryBox,
    BgLeft,
    BgRight,
} from './Component'
import AlbumCard from '../../components/AlbumCard/AlbumCard';
import {
    selectProfile,
    loginUser,
} from '../../redux/profileSlice'
import { useSelector, useDispatch } from 'react-redux';
import { albumApi } from '../../services/albumApi'
import { checkObjectLength } from '../../helpers/helpers';
import Loading from '../../components/Loading/Loading';
import { useHistory } from 'react-router';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import PopupFilter from '../../components/PopupFilter/PopupFilter';
import { selectData } from '../../redux/dataFilteredSlice';

import bgCloudImg from '../../assets/image/bg_cloud.png';
import { AnimatePresence } from 'framer-motion';
import { impostorsImg } from '../../helpers/helpers'

const Hero = ({ profileData, setIsLogin }) => {

    return (
        <Container fluid center>
            <LogoStyled to='/'>
                <img src={glasses_img} alt='Logo' />
                <span>PXL.GRAM</span>
            </LogoStyled>

            {checkObjectLength(profileData) ? (
                <HeroCaption>
                    Welcome, <br />
                    <Link to='/profile'>
                        {profileData.name}
                    </Link>
                </HeroCaption>
            ) : <Loading />}

            <HeroSubCaption>
                pxl.gram is literally world's best photo gallery app for your album collections.
            </HeroSubCaption>
        </Container>
    )
}

const SplashPage = ({ dataUsers, isLogin, setIsLogin }) => {

    const dispatch = useDispatch()
    const { data, error, isLoading } = dataUsers

    // return <Loading />
    return isLoading ? (<Loading />) : (
        <AnimatePresence exitBeforeEnter>
            {!isLogin && (
                <SplashContainer
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                >
                    <LogoStyled to='/'>
                        <img src={glasses_img} alt='Logo' />
                        <span>PXL.GRAM</span>
                    </LogoStyled>
                    <h2>
                        Hey, <br/>
                        <span>let's get you started</span>
                    </h2>

                    <span className='desc'>Choose your avatar</span>

                    {data === undefined ? (<Loading />) : (
                        <AvatarGrid>
                            {data.map((el, index) => (
                                <AvatarItem 
                                    key={index}
                                    onClick={() => {
                                        dispatch(loginUser(el))
                                        setIsLogin(true)
                                    }}
                                >
                                    <img src={impostorsImg[index]} alt={`avatar-${el.name}`} />
                                    <div className='user'>
                                        <span>{el.name}</span>
                                    </div>
                                </AvatarItem>
                            ))}
                        </AvatarGrid>
                    )}
                    <BgLeft src={bgCloudImg} alt='background cloud left' />
                    <BgRight src={bgCloudImg} alt='background cloud right' />
                </SplashContainer>
            )}
        
        </AnimatePresence>
    )
}

const LoggedInComp = ({ profileData, dataAlbums, isLogin, setIsLogin }) => {
    const [hasPopup, setHasPopup] = useState(false)

    const filteredDataSelector = useSelector(selectData)

    const { data, error, isLoading } = dataAlbums

    const fetchAllAlbumData = data?.filter(el => el.userId !== profileData.id)
    const fetchFilteredData = checkObjectLength(filteredDataSelector) && filteredDataSelector.filteredData.filter(el => el.userId !== profileData.id)

    const albumData = fetchFilteredData !== false ? fetchFilteredData : fetchAllAlbumData

    return (
        <Flex 
            direction='column'
        >
            <Hero profileData={profileData} setIsLogin={setIsLogin} />

            {checkObjectLength(filteredDataSelector) && (
                <SearchQueryBox>
                    <span className='title'>Search by: {' '}
                        <strong>{filteredDataSelector.searchType === 'album' ? 'Album Name' : 'User Name'}</strong> {' '}
                    </span>
                    <span className='content'>"{filteredDataSelector.searchInput}"</span>
                    <span className='title'>
                        Found ({filteredDataSelector.filteredData.length})
                    </span>
                </SearchQueryBox>
            )}
            
            <Container addpadding={true}>
                {albumData !== undefined ? (
                    <AlbumCard 
                        nopadding={false} 
                        albumData={albumData}
                    />
                ) : (<Loading />)}
                
            </Container>

            <FloatingButton setHasPopup={setHasPopup} />
            {hasPopup && <PopupFilter hasPopup={hasPopup} setHasPopup={setHasPopup} />}
        </Flex>
    )
}

function Home(props) {

    const [isLogin, setIsLogin] = useState(false)

    const dataUsers = albumApi.endpoints.getUsers.useQueryState()
    const dataAlbums = albumApi.endpoints.getAlbums.useQueryState()
    const photos = albumApi.endpoints.getPhotos.useQueryState()

    const profileData = useSelector(selectProfile)

    useEffect(() => {
        if (checkObjectLength(profileData)) {
            setIsLogin(true)
        } else {
            setIsLogin(false)
        }
    }, [profileData])

    // return <Loading />
    return isLogin ? (
        <LoggedInComp 
            profileData={profileData}
            dataAlbums={dataAlbums}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
        />
    ) : (
        <SplashPage 
            dataUsers={dataUsers}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
        />
    );
}

export default Home;