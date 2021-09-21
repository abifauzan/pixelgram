import React from 'react';
import { PopupContainer, PopupTop, CommentArea, CommentInput, CommentSingle } from './PopupCommentStyle';
import { GrFormClose } from 'react-icons/gr'

function PopupComment(props) {
    return (
        <PopupContainer>
            <PopupTop>
                <span>3 Comments</span>
                <button>
                    <GrFormClose />
                </button>
            </PopupTop>
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

            <CommentInput>
                <input 
                    type='text'
                    name='comment'
                    placeholder='Add a comment..'
                />
                <button
                    type='button'
                >Add</button>
            </CommentInput>
        </PopupContainer>
    );
}

export default PopupComment;