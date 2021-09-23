import React from 'react';
import Button from '../Button/Button';
import { ButtonUser, Item, ItemName, Main, StackImg } from './AlbumCardStyle';
import {
    albumApi
} from '../../services/albumApi'
import {
    selectProfile,
} from '../../redux/profileSlice'
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../Loading/Loading';
import usePhotoToAlbum from '../../hooks/usePhotoToAlbum';
import useUserToAlbum from '../../hooks/useUserToAlbum';
import { useHistory } from 'react-router';
import { checkObjectLength } from '../../helpers/helpers';

const AlbumSingle = ({ index, mode, albumData }) => {

    const history = useHistory()

    const { data: photosData } = usePhotoToAlbum({albumId: albumData.id, isThumbnail: true}) // array
    const { data: userData } = useUserToAlbum({ userId: albumData.userId }) // object

    const goToAlbum = () => {
        history.push(`/album/${albumData.id}`)
    }

    const goToUser = () => {
        history.push(`/user/${userData.username}`)
    }

    // console.log(userData)
    // return <Loading />

    return photosData.length > 0 && checkObjectLength(userData) ? (
        <Item>
            <StackImg onClick={goToAlbum}>
                {photosData.map((el, index) => (
                    <img 
                        key={`${index}-${el.albumId}`}
                        src={el.url}
                        alt={el.title}
                    />
                ))}

                {/* <img 
                    src='https://www.planetware.com/wpimages/2019/09/croatia-in-pictures-most-beautiful-places-to-visit-hvar-island.jpg' 
                    alt='img one'
                />
                
                <img 
                    src='https://www.planetware.com/wpimages/2019/09/croatia-in-pictures-most-beautiful-places-to-visit-dubrovnik.jpg' 
                    alt='img two'
                />
                <img 
                    src='https://www.nonsolocinema.com/wp/wp-content/uploads/2019/10/beautiful-gallery-bologna.jpg' 
                    alt='img three'
                /> */}
            </StackImg>
            <ItemName>{albumData.title}</ItemName>

            {mode !== 'profile' && (
                <ButtonUser>
                    <Button onclick={goToUser}>
                        By: {userData.name}
                    </Button>
                </ButtonUser>
            )}
            
        </Item>
    ) : (<Loading />)
}

function AlbumCard({ albumData, nopadding = false, mode = 'default' }) {

    // console.log(albumData)
    // return <Loading /> 

    return albumData === undefined ? <Loading /> : (
        <Main nopadding={false}>
            {albumData !== undefined && albumData.length > 0 && albumData.map((el, index) => (
                <AlbumSingle 
                    key={index}
                    albumData={el}
                    mode={mode}
                />
            ))}
            
        </Main>
    );
}

export default AlbumCard;