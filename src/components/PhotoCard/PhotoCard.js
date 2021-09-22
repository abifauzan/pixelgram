import React from 'react';
import Loading from '../Loading/Loading';
import { Item, Image, Main, ItemName } from './PhotoCardStyle';
import { useHistory } from 'react-router';

function PhotoCard({ photosData }) {

    const history = useHistory()

    return photosData.length > 0 ? (
        <Main>
            {photosData.map((el, index) => (
                <Item 
                    key={`${index}-${el.id}`}
                    onClick={() => history.push(`/photo/${el.id}`)}
                >
                    <Image src={el.url} alt={el.title} />
                    <ItemName>{el.title}</ItemName>
                </Item>
            ))}
        </Main>
    ) : (<Loading />);
}

export default PhotoCard;