import React, { useState, useEffect } from 'react';
import { PopupContainer, PopupTop, CommentArea, CommentInput, CommentSingle } from './PopupCommentStyle';
import { GrFormClose } from 'react-icons/gr'
import Alert from '../Alert/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { 
    addOne,
    selectComments,
} from '../../redux/commentsSlice';
import { 
    selectProfile,
} from '../../redux/profileSlice';

function PopupComment({ setShowPopup, findPhoto, dataAlbums, dataUsers }) {
    const [query, setQuery] = useState('')
    const [error, setError] = useState(false)

    const dataComments = useSelector(selectComments)
    const dataProfile = useSelector(selectProfile)
    const filteredComments = dataComments.filter(el => el.photoId === Number(findPhoto.id))
    const dispatch = useDispatch()

    const handleComment = () => {
        if (query !== '') {
            dispatch(addOne({
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

    return (
        <PopupContainer>
            <PopupTop>
                <span>3 Comments</span>
                <button onClick={() => setShowPopup(false)}>
                    <GrFormClose />
                </button>
            </PopupTop>
            <CommentArea>
            {dataComments.length > 0 ? dataComments.map((el, index) => (
                <CommentSingle key={el.id}>
                    <img src='https://i.pravatar.cc/300' className='avatar' alt='avatar' />
                    <div className='content'>
                        <span className='username'>{el.userName}</span>
                        <span className='comment'>
                            {el.message}
                        </span>
                    </div>
                </CommentSingle>
            )) : (
                <Alert>
                    No data found
                </Alert>
            )}
            </CommentArea>

            <CommentInput>
                <input 
                    type='text'
                    name='comment'
                    placeholder='Add a comment..'
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                        setError(false)
                    }}
                />
                <button
                    onClick={handleComment}
                    type='button'
                    disabled={error}
                >Add</button>
            </CommentInput>
        </PopupContainer>
    );
}

export default PopupComment;