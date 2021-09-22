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

const Hero = (props) => {

    return (
        <Container fluid center>
            <LogoStyled to='/'>
                <img src={glasses_img} alt='Logo' />
                <span>PXL.GRAM</span>
            </LogoStyled>

            <HeroCaption>
                Welcome, <br />
                <Link to='/'>
                    Abi Fauzan
                </Link>
            </HeroCaption>

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

const SplashPage = () => {

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

            <AvatarGrid>
                {Array(10).fill().map((_, index) => (
                    <AvatarItem key={index}><img src='https://via.placeholder.com/150/92c952' alt='img' /> </AvatarItem>
                ))}
            </AvatarGrid>
        </SplashContainer>
    )
}

const LoggedInComp = () => {

    return (
        <Flex direction='column'>
            <Hero />
            
            <Container addpadding={true}>
                <AlbumCard nopadding={false} />

            </Container>
        </Flex>
    )
}

function Home(props) {
    return (
        <SplashPage />
        // <LoggedInComp />
    );
}

export default Home;