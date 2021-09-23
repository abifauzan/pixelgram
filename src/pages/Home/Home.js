import React, { useState } from 'react';
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
import impostor1 from '../../assets/image/avatar/impostor_1.png';
import impostor2 from '../../assets/image/avatar/impostor_2.png';
import impostor3 from '../../assets/image/avatar/impostor_3.png';
import impostor4 from '../../assets/image/avatar/impostor_4.png';
import impostor5 from '../../assets/image/avatar/impostor_5.png';
import impostor6 from '../../assets/image/avatar/impostor_6.png';
import impostor7 from '../../assets/image/avatar/impostor_7.png';
import impostor8 from '../../assets/image/avatar/impostor_8.png';
import impostor9 from '../../assets/image/avatar/impostor_9.png';
import impostor10 from '../../assets/image/avatar/impostor_10.png';
import bgCloudImg from '../../assets/image/bg_cloud.png';

const impostorsImg = [
    impostor1, impostor2, impostor3, impostor4, impostor5, impostor6, impostor7, impostor8, impostor9, impostor10
]

const Hero = ({ profileData }) => {

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

const SplashPage = ({ dataUsers }) => {

    const dispatch = useDispatch()
    const { data, error, isLoading } = dataUsers

    // return <Loading />
    return isLoading ? (<Loading />) : (
        <SplashContainer>
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
    )
}

const LoggedInComp = ({ profileData, dataAlbums }) => {
    const [hasPopup, setHasPopup] = useState(false)

    const filteredDataSelector = useSelector(selectData)

    const { data, error, isLoading } = dataAlbums

    const fetchAllAlbumData = data?.filter(el => el.userId !== profileData.id)
    const fetchFilteredData = checkObjectLength(filteredDataSelector) && filteredDataSelector.filteredData.filter(el => el.userId !== profileData.id)

    const albumData = fetchFilteredData !== false ? fetchFilteredData : fetchAllAlbumData

    return (
        <Flex direction='column'>
            <Hero profileData={profileData} />

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
            {hasPopup && <PopupFilter setHasPopup={setHasPopup} />}
            
        </Flex>
    )
}

function Home(props) {

    const dataUsers = albumApi.endpoints.getUsers.useQueryState()
    const dataAlbums = albumApi.endpoints.getAlbums.useQueryState()
    const photos = albumApi.endpoints.getPhotos.useQueryState()

    // console.log(users)

    const profileData = useSelector(selectProfile)

    const isLoggedin = checkObjectLength(profileData) ? true : false;

    // return <Loading />
    return isLoggedin ? (
        <LoggedInComp 
            profileData={profileData}
            dataAlbums={dataAlbums}
        />
    ) : (
        <SplashPage 
            dataUsers={dataUsers}
        />
    );
}

export default Home;