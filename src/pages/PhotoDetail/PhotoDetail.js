import React, { useEffect, useState } from 'react';
import { ButtonStyled } from '../../components/Button/ButtonStyle';
import { ButtonAction, ButtonClose, MobileContainer, MobileContent, DesktopContent, DesktopCommentArea } from './PhotoDetailStyle';
import { BiCommentDetail } from 'react-icons/bi'
import { AiFillHeart } from 'react-icons/ai'
import { GrFormClose } from 'react-icons/gr'
import { IoChevronBack } from 'react-icons/io5';
import PopupComment from '../../components/PopupComment/PopupComment';
import MainLayout, { HeaderGoBack } from '../../components/Layout/Layout';
import styled from 'styled-components';
import { Subtitle, Title, DesktopMain, DesktopCommentList, CommentArea, CommentSingle, DesktopTextArea } from './PhotoDetailStyle';
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
import { 
    addOne as addOneComment,
    selectComments,
} from '../../redux/commentsSlice';
import { 
    selectProfile,
} from '../../redux/profileSlice';

const ButtonBack = styled(ButtonStyled)`
    padding: 2px;
    position: relative;
    bottom: 1px;

    svg {
        position: relative;
        left: -2px;
    }
`
// Handle click favorite
const handleFavorite = ({dataPhoto, dataUsers, status, dispatch}) => {
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
    const [showPopup, setShowPopup] = useState(false)

    const history = useHistory()

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
                        <ButtonAction onClick={() => setShowPopup(true)}>
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

            {showPopup && (
                <PopupComment 
                    setShowPopup={setShowPopup}
                    findPhoto={findPhoto}
                    dataAlbums={dataAlbums}
                    dataUsers={dataUsers}
                />
            ) }
        </MobileContainer>
    ) : (<Loading />)
}

const DesktopView = ({ findPhoto, dataAlbums, dataUsers, isFavorite, dispatch }) => {
    const [query, setQuery] = useState('')
    const [error, setError] = useState(false)
    const [comments, setComments] = useState([])

    const history = useHistory()

    const dataComments = useSelector(selectComments)
    const dataProfile = useSelector(selectProfile)

    useEffect(() => {
        if (findPhoto !== undefined) {
            setComments(dataComments.filter(el => el.photoId === Number(findPhoto.id)))
        }
    }, [dataComments, findPhoto])

    // handle add comment
    const handleComment = () => {
        if (query !== '') {
            dispatch(addOneComment({
                userId: dataProfile.id,
                userName: dataProfile.name,
                photoId: findPhoto.id,
                message: query
            }))
            setError(false)
            setQuery('')
        } else {
            setError(true)
        }
    }

    return findPhoto !== undefined ? (
        <MainLayout>
            <HeaderGoBack>
                <div className='btnBack'>
                    <ButtonBack onClick={() => history.goBack()}>
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
                            <div className='flexContent'>
                                <Title>
                                    {findPhoto.title}
                                </Title>
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
                            </div>
                            <Subtitle>
                                Owned by: <Link to={`/user/${dataUsers.username}`}>{dataUsers.name}</Link>
                            </Subtitle>
                            <Subtitle>
                                Album: <Link to={`/album/${dataAlbums.id}`}>{dataAlbums.title}</Link>
                            </Subtitle>
                            <DesktopCommentArea>
                                <DesktopTextArea
                                    name='comment'
                                    placeholder='Add a Comment..'
                                    error={error}
                                    value={query}
                                    onChange={(e) => {
                                        setQuery(e.target.value)
                                        setError(false)
                                    }}
                                ></DesktopTextArea>
                                <Button 
                                    onclick={handleComment}
                                    disabled={error}
                                >
                                    Add comment
                                </Button>
                            </DesktopCommentArea>
                        </div>
                    </DesktopMain>
                </DesktopContent>
            )}
            

            <DesktopCommentList>
                {comments.length > 0 ? `${comments.length} Comments` : 'No comments found'}
            </DesktopCommentList>

            <CommentArea>
                {comments.length > 0 && comments.map((el, index) => (
                    <CommentSingle key={el.id}>
                        <img src='https://i.pravatar.cc/300' alt='avatar user' className='avatar' />
                        <div className='content'>
                            <span className='username'>{el.userName}</span>
                            <span className='comment'>
                                {el.message}
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
        <>
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
        </>
    );
}

export default PhotoDetail;