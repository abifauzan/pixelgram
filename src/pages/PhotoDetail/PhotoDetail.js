import React, { useEffect, useState } from 'react';
import { ButtonStyled } from '../../components/Button/ButtonStyle';
import { ButtonAction, ButtonClose, MobileContainer, MobileContent, DesktopContent, DesktopCommentArea } from './PhotoDetailStyle';
import { BiCommentDetail } from 'react-icons/bi'
import { AiFillHeart } from 'react-icons/ai'
import { GrFormClose } from 'react-icons/gr'
import { IoChevronBack } from 'react-icons/io5';
import PopupComment from '../../components/PopupComment/PopupComment';
import MainLayout, { Flex, HeaderGoBack } from '../../components/Layout/Layout';
import styled from 'styled-components';
import { Subtitle, Title, DesktopMain, DesktopCommentList, CommentArea, CommentSingle } from './PhotoDetailStyle';
import { Link } from 'react-router-dom';
import { useParams, useHistory } from 'react-router';
import {
    albumApi,
} from '../../services/albumApi'
import Loading from '../../components/Loading/Loading';
import { checkObjectLength } from '../../helpers/helpers';
import useIsMobile from '../../hooks/useIsMobile';
import useAlbumToPhoto from '../../hooks/useAlbumToPhoto';
import useUserToAlbum from '../../hooks/useUserToAlbum';
import Button from '../../components/Button/Button';
import { 
    selectfavorites,
    addOne,
    removeOne,
} from '../../redux/favoriteSlice';
import { useSelector, useDispatch } from 'react-redux';

const ButtonBack = styled(ButtonStyled)`
    padding: 2px;
    position: relative;
    bottom: 1px;

    svg {
        position: relative;
        left: -2px;
    }
`

const handleFavorite = ({dataPhoto, dataUsers, status, dispatch}) => {
    // console.log(dataPhoto, dataUsers, status)
    if (status) {
        dispatch(removeOne(dataPhoto.id))
    } else {
        dispatch(addOne({
            userId: dataUsers.id,
            ...dataPhoto
        }))
    }
}

const MobileView = ({ findPhoto, dataAlbums, dataUsers, isFavorite, dispatch }) => {
    const history = useHistory()

    // return <Loading />

    return findPhoto !== undefined ? (
        <MobileContainer img={findPhoto.url}>
            {checkObjectLength(dataUsers) && checkObjectLength(dataAlbums) && dataAlbums !== undefined && (
                <MobileContent>
                    <div className='users'>
                        <div className='avatar' />
                        <div className='userInfo'>
                            <span className='username'>{dataUsers.name}</span>
                            <span className='album'>{dataAlbums.title}</span>
                        </div>
                    </div>
                    <div className='icons'>
                        <ButtonAction>
                            <BiCommentDetail />
                        </ButtonAction>
                        <ButtonAction 
                            onClick={() => {
                                handleFavorite({
                                    dataPhoto: findPhoto,
                                    dataUsers: dataUsers,
                                    status: isFavorite,
                                    dispatch: dispatch,
                                })
                            }}
                            active={isFavorite}
                        >
                            <AiFillHeart />
                        </ButtonAction>
                    </div>
                </MobileContent>
            ) }
            <ButtonClose onClick={() => history.goBack()}>
                <GrFormClose />
            </ButtonClose>
        </MobileContainer>
    ) : (<Loading />)
}

const DesktopView = ({ findPhoto, dataAlbums, dataUsers, isFavorite, dispatch }) => {

    return findPhoto !== undefined ? (
        <MainLayout>
            <HeaderGoBack>
                <div className='btnBack'>
                    <ButtonBack>
                        <IoChevronBack />
                    </ButtonBack>
                </div>

                <span> Photo Detail</span>
            </HeaderGoBack>

            {checkObjectLength(dataUsers) && checkObjectLength(dataAlbums) && dataAlbums !== undefined && (
                <DesktopContent>
                    <DesktopMain>
                        <div className='boxImg'>
                            <img src={findPhoto.url} alt={findPhoto.title} />
                        </div>
                        <div className='content'>
                            <Title>
                                {findPhoto.title}
                            </Title>
                            <Subtitle>
                                Owned by: <Link to={`/user/${dataUsers.name}`}>{dataUsers.name}</Link>
                            </Subtitle>
                            <Subtitle>
                                Album: <Link to={`/album/${dataAlbums.id}`}>{dataAlbums.title}</Link>
                            </Subtitle>
                            <DesktopCommentArea>
                                <textarea
                                    name='comment'
                                    placeholder='Add a Comment..'
                                ></textarea>
                                <Flex gap20>
                                    <Button>
                                        Add comment
                                    </Button>
                                    <Button 
                                        svg
                                        filled={isFavorite}
                                        onclick={() => {
                                            handleFavorite({
                                                dataPhoto: findPhoto,
                                                dataUsers: dataUsers,
                                                status: isFavorite,
                                                dispatch: dispatch,
                                            })
                                        }}
                                    >
                                        <AiFillHeart />
                                    </Button>
                                </Flex>
                                
                            </DesktopCommentArea>
                        </div>
                    </DesktopMain>
                </DesktopContent>
            )}
            

            <DesktopCommentList>
                <p>3 Comments</p>
            </DesktopCommentList>

            <CommentArea>
                {Array(10).fill().map((_, index) => (
                    <CommentSingle key={index}>
                        <div className='avatar' />
                        <div className='content'>
                            <span className='username'>Abi Fauzan</span>
                            <span className='comment'>
                                This is very short comment from the user
                                This is very short comment from the user
                                This is very short comment from the user
                            </span>
                        </div>
                    </CommentSingle>
                ))}
            </CommentArea>
        </MainLayout>
    ) : (<Loading />)
}

function PhotoDetail(props) {
    const [isFavorite, setIsFavorite] = useState(false)

    const { id } = useParams()

    const isMobile = useIsMobile()

    const favoritesData = useSelector(selectfavorites)
    const dispatch = useDispatch()

    const { data: dataPhotos } = albumApi.endpoints.getPhotos.useQueryState() // undefined
    const findPhoto = dataPhotos?.find(el => el.id === Number(id)) // undefined

    const { data: dataAlbums } = useAlbumToPhoto({ albumId: findPhoto?.albumId })
    const { data: dataUsers } = useUserToAlbum({ userId: dataAlbums?.userId})

    useEffect(() => {
        if (favoritesData.length > 0) {
            const data = favoritesData.find(el => el.id === Number(id))
            if (data !== undefined) {
                setIsFavorite(true)
            } else {
                setIsFavorite(false)
            }
        } else {
            setIsFavorite(false)
        }
    }, [favoritesData, id])

    return (
        <main>
            {isMobile 
                ? 
                <MobileView 
                    findPhoto={findPhoto} 
                    dataAlbums={dataAlbums}
                    dataUsers={dataUsers}
                    isFavorite={isFavorite}
                    dispatch={dispatch}
                /> 
                : 
                <DesktopView 
                    findPhoto={findPhoto} 
                    dataAlbums={dataAlbums}
                    dataUsers={dataUsers}
                    isFavorite={isFavorite}
                    dispatch={dispatch}
                />}
            {/* <PopupComment /> */}
        </main>
    );
}

export default PhotoDetail;