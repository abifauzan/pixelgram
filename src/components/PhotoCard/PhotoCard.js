import React from 'react';
import { Item, Image, Main, ItemName } from './PhotoCardStyle';

function PhotoCard(props) {
    return (
        <Main>
            {Array(5).fill().map((_, index) => (
                <Item key={index}>
                    <Image src='https://via.placeholder.com/600/45935c' alt='picture' />
                    <ItemName>illo qui vel laboriosam vel fugit deserunt</ItemName>
                </Item>
            ))}
        </Main>
        
    );
}

export default PhotoCard;