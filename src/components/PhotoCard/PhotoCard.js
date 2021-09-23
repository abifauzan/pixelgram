import React from 'react';
import Loading from '../Loading/Loading';
import { Item, Image, Main, ItemName } from './PhotoCardStyle';
import { useHistory } from 'react-router';
import usePagination from '../../hooks/usePagination';

function PhotoCard({ photosData }) {

    const history = useHistory()

    const { data, fetch } = usePagination({ dataset: photosData })
    // console.log('photosData', photosData)
    // return <Loading />

    return data.length > 0 ? (
        <>
            <Main>
                {data.map((el, index) => (
                    <Item 
                        key={`${index}-${el.id}`}
                        onClick={() => history.push(`/photo/${el.id}`)}
                    >
                        <Image src={el.url} alt={el.title} />
                        <ItemName>{el.title}</ItemName>
                    </Item>
                ))}
            </Main>
            {fetch && <Loading />}
        </>
    ) : (<Loading />)
}

export default PhotoCard;