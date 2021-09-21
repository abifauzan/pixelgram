import React from 'react';
import Button from '../Button/Button';
import { Item, ItemName, Main, StackImg } from './AlbumCardStyle';

function AlbumCard(props) {
    return (
        <Main>
            {Array(5).fill().map((_, index) => (
                <Item key={index}>
                    <StackImg>
                        <img 
                            src='https://via.placeholder.com/600/363789' 
                            alt='img one'
                            className='level3'
                        />
                        <img 
                            src='https://via.placeholder.com/600/1224bd' 
                            alt='img two'
                            className='level2'
                        />
                        <img 
                            src='https://via.placeholder.com/600/a9ef52' 
                            alt='img three'
                            className='level1'
                        />
                    </StackImg>
                    <ItemName>qui quasi nihil aut voluptatum sit dolore minima</ItemName>
                    <Button>
                        By: Abi Fauzan
                    </Button>
                </Item>
            ))}
            
        </Main>
    );
}

export default AlbumCard;