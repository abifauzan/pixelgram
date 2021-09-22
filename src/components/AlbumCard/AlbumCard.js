import React from 'react';
import Button from '../Button/Button';
import { ButtonUser, Item, ItemName, Main, StackImg } from './AlbumCardStyle';
import {
    useGetUsersQuery,
    useGetAlbumsQuery,
    useGetPhotosQuery,
} from '../../services/albumApi'
import Loading from '../Loading/Loading';
import usePhotoToAlbum from '../../hooks/usePhotoToAlbum';
import useUserToAlbum from '../../hooks/useUserToAlbum';

const AlbumSingle = ({ index, mode, albumData }) => {

    const { data: photosData } = usePhotoToAlbum({albumId: albumData.id, isThumbnail: true})
    const { data: userData } = useUserToAlbum({ userId: albumData.userId })
    // console.log(userData)

    return (
        <Item>
            <StackImg>
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
                    <Button>
                        By: {userData.name}
                    </Button>
                </ButtonUser>
                
            )}
            
        </Item>
    )
}

function AlbumCard({ nopadding = false, mode = 'default' }) {

    const { data, error, isLoading } = useGetAlbumsQuery()

    return isLoading ? <Loading /> : (
        <Main nopadding={false}>
            {!isLoading && data.length > 0 && data.slice(0, 10).map((el, index) => (
                <AlbumSingle 
                    index={index}
                    albumData={el}
                    mode={mode}
                    key={index}
                />
            ))}
            
        </Main>
    );
}

export default AlbumCard;