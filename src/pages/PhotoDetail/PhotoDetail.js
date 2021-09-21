import React from 'react';
import { ButtonStyled } from '../../components/Button/ButtonStyle';
import { ButtonAction, ButtonClose, MobileContainer, MobileContent, DesktopContent, DesktopCommentArea } from './PhotoDetailStyle';
import { BiCommentDetail } from 'react-icons/bi'
import { AiFillHeart } from 'react-icons/ai'
import { GrFormClose } from 'react-icons/gr'
import { IoChevronBack } from 'react-icons/io5';
import PopupComment from '../../components/PopupComment/PopupComment';
import MainLayout, { HeaderGoBack } from '../../components/Layout/Layout';
import styled from 'styled-components';
import { Subtitle, Title, DesktopMain, DesktopCommentList, CommentArea, CommentSingle } from './PhotoDetailStyle';
import { Link } from 'react-router-dom';

const ButtonBack = styled(ButtonStyled)`
    padding: 2px;
    position: relative;
    bottom: 1px;

    svg {
        position: relative;
        left: -2px;
    }
`

const MobileView = () => {

    return (
        <MobileContainer img='https://via.placeholder.com/600/363789'>
            <MobileContent>
                <div className='users'>
                    <div className='avatar' />
                    <div className='userInfo'>
                        <span className='username'>Kurtis Weissnat</span>
                        <span className='album'>qui quasi nihil aut voluptatum sit dolore minima</span>
                    </div>
                </div>
                <div className='icons'>
                    <ButtonAction>
                        <BiCommentDetail />
                    </ButtonAction>
                    <ButtonAction>
                        <AiFillHeart />
                    </ButtonAction>
                </div>
            </MobileContent>
            <ButtonClose>
                <GrFormClose />
            </ButtonClose>
        </MobileContainer>
    )
}

const DesktopView = () => {

    return (
        <MainLayout>
            <HeaderGoBack>
                <div className='btnBack'>
                    <ButtonBack>
                        <IoChevronBack />
                    </ButtonBack>
                </div>

                <span> Photo Detail</span>
            </HeaderGoBack>

            
            <DesktopContent>
                <DesktopMain>
                    <div className='boxImg'>
                        <img src='https://via.placeholder.com/600/363789' alt='detail' />
                    </div>
                    <div className='content'>
                        <Title>
                            ui quasi nihil aut voluptatum sit dolore minima
                        </Title>
                        <Subtitle>
                            Owned by: <Link to='/'>Abi Fauzan</Link>
                        </Subtitle>
                        <Subtitle>
                            Album: <Link to='/'>Album Name</Link>
                        </Subtitle>
                        <DesktopCommentArea>
                            <textarea
                                name='comment'
                                placeholder='Add a Comment..'
                            ></textarea>
                            <button type='button'>
                                Add comment
                            </button>
                        </DesktopCommentArea>
                    </div>
                </DesktopMain>
            </DesktopContent>

            <DesktopCommentList>
                <p>3 Comments</p>
            </DesktopCommentList>

            <CommentArea>
                {Array(6).fill().map((_, index) => (
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
    )
}

function PhotoDetail(props) {
    return (
        <main>
            {/* <PopupComment /> */}
            <MobileView />
            {/* <DesktopView /> */}
        </main>
    );
}

export default PhotoDetail;