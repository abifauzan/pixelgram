import React from 'react';
import { ButtonStyled } from '../../components/Button/ButtonStyle';
import MainLayout, { HeaderGoBack } from '../../components/Layout/Layout';
import { IoChevronBack } from 'react-icons/io5';
import styled from 'styled-components';
import { Subtitle, Title } from './AlbumDetailStyle';
import { Link } from 'react-router-dom';
import PhotoCard from '../../components/PhotoCard/PhotoCard';

const ButtonBack = styled(ButtonStyled)`
    padding: 2px;
    position: relative;
    bottom: 1px;

    svg {
        position: relative;
        left: -2px;
    }
`

function AlbumDetail(props) {
    return (
        <MainLayout>
            <HeaderGoBack>
                <div className='btnBack'>
                    <ButtonBack>
                        <IoChevronBack />
                    </ButtonBack>
                </div>

                <span> Album Detail</span>
            </HeaderGoBack>

            <Title>
                ui quasi nihil aut voluptatum sit dolore minima
            </Title>
            <Subtitle>
                Owned by: <Link to='/'> Abi Fauzan </Link>
            </Subtitle>

            <PhotoCard />
        </MainLayout>
    );
}

export default AlbumDetail;