import React from 'react';
import { Flex, Container } from '../../components/Layout/Layout';
import { Link } from 'react-router-dom';
import glasses_img from '../../assets/image/glasses.png'
import {
    LogoStyled,
    HeroCaption,
    HeroSubCaption,
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

function Home(props) {
    return (
        <Flex direction='column'>
            <Hero />
            
            <Container>
                <AlbumCard />

            </Container>
        </Flex>
    );
}

export default Home;