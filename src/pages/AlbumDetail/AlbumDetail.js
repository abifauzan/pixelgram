import React from 'react';
import { ButtonStyled } from '../../components/Button/ButtonStyle';
import MainLayout, { HeaderGoBack } from '../../components/Layout/Layout';
import { IoChevronBack } from 'react-icons/io5';
import styled from 'styled-components';
import { Subtitle, Title } from './AlbumDetailStyle';
import { Link } from 'react-router-dom';
import PhotoCard from '../../components/PhotoCard/PhotoCard';
import { useParams, useHistory } from 'react-router';
import { useEffect } from 'react';
import usePhotoToAlbum from '../../hooks/usePhotoToAlbum';
import useUserToAlbum from '../../hooks/useUserToAlbum';
import {
    albumApi,
} from '../../services/albumApi'
import Loading from '../../components/Loading/Loading';
import { checkObjectLength } from '../../helpers/helpers';

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

    const { id } = useParams()

    const history = useHistory()

    const { data: dataAlbums } = albumApi.endpoints.getAlbums.useQueryState() // undefined

    const findAlbum = dataAlbums?.find(el => el.id === Number(id)) // undefined

    const { data: photosData } = usePhotoToAlbum({albumId: id}) // array

    const { data: userData } = useUserToAlbum({ userId: findAlbum?.userId }) // object

    return findAlbum !== undefined ? (
        <MainLayout
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}
        >
            
            <HeaderGoBack>
                <div className='btnBack'>
                    <ButtonBack onClick={() => history.goBack()}>
                        <IoChevronBack />
                    </ButtonBack>
                </div>

                <span> Album Detail</span>
            </HeaderGoBack>

            { findAlbum !== undefined && checkObjectLength(findAlbum) && photosData.length < 0 && checkObjectLength(userData)}
            <>
                <Title>
                    {findAlbum.title}
                </Title>
                <Subtitle>
                    Owned by: <Link to={`/user/${userData.username}`}> {userData.name} </Link>
                </Subtitle>

                <PhotoCard 
                    photosData={photosData}
                />
            </>
        </MainLayout>
    ) : (<Loading />)
}

export default AlbumDetail;

