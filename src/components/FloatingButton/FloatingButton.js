import React from 'react';
import question_img from '../../assets/image/Retro-Block-Question-2-icon.png'
import { Block, BlockLink } from './FloatingButtonStyle';
import useIsMobile from '../../hooks/useIsMobile';

function FloatingButton({ setHasPopup }) {
    const isMobile = useIsMobile()

    return (
        <Block 
            key='floating-button'
            onClick={() => setHasPopup(true)}
            initial={{ bottom: '-100px'}}
            animate={ isMobile ? { bottom: '16px' } : { bottom: '48px' } }
            whileHover={{ y: '-10px', x: '-10px' }}
        >
            <BlockLink >
                <img src={question_img} alt='question button' />
            </BlockLink>
        </Block>
    );
}

export default FloatingButton;