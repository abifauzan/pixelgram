import React from 'react';
import question_img from '../../assets/image/Retro-Block-Question-2-icon.png'
import { Block, BlockLink } from './FloatingButtonStyle';

function FloatingButton({ setHasPopup }) {
    return (
        <Block onClick={() => setHasPopup(true)}>
            <BlockLink>
                <img src={question_img} alt='question button' />
            </BlockLink>
        </Block>
    );
}

export default FloatingButton;