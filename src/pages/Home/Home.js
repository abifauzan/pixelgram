import React from 'react';
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
} from './Component'
import AlbumCard from '../../components/AlbumCard/AlbumCard';
import {
    selectProfile,
    loginUser,
} from '../../redux/profileSlice'
import { useSelector, useDispatch } from 'react-redux';
import {
    useGetUsersQuery,
    useGetAlbumsQuery,
    useGetPhotosQuery,
} from '../../services/albumApi'
import { checkObjectLength } from '../../helpers/helpers';
import Loading from '../../components/Loading/Loading';
import { useHistory } from 'react-router';

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

const FilterSearch = () => {

    return (
        <div>

        </div>
    )
}

const SplashPage = ({ dataUsers, isLoading, dispatch }) => {

    return (
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

            {isLoading ? (<Loading />) : (
                <AvatarGrid>
                    {!isLoading && checkObjectLength(dataUsers) && dataUsers.map((el, index) => (
                        <AvatarItem 
                            key={index}
                            onClick={() => {
                                dispatch(loginUser(el))
                            }}
                        ><img src='https://via.placeholder.com/150/92c952' alt={`avatar-${el.name}`} /></AvatarItem>
                    ))}
                </AvatarGrid>
            )}
        </SplashContainer>
    )
}

const LoggedInComp = ({ profileData }) => {

    return (
        <Flex direction='column'>
            <Hero profileData={profileData} />
            
            <Container addpadding={true}>
                <AlbumCard 
                    nopadding={false} 
                />

            </Container>
        </Flex>
    )
}

function Home(props) {

    const { data: dataUsers, error: errorUsers, isLoading: isLoadingUsers } = useGetUsersQuery()

    const profileData = useSelector(selectProfile)
    const dispatch = useDispatch()

    const isLoggedin = checkObjectLength(profileData) ? true : false;

    return isLoggedin ? (
        <LoggedInComp 
            profileData={profileData}
        />
    ) : (
        <SplashPage 
            dataUsers={dataUsers}
            isLoading={isLoadingUsers}
            dispatch={dispatch}
        />
    );
}

export default Home;