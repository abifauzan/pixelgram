import React from 'react';
import Loading from '../Loading/Loading';
import { Item, Image, Main, ItemName } from './PhotoCardStyle';
import { useHistory } from 'react-router';
import usePagination from '../../hooks/usePagination';
import useIntersection from '../../hooks/useIntersection';
import { cardVariants1 } from '../../styles/Transition';
import PhotoSingle from './PhotoSingle';

function PhotoCard({ photosData, mode = 'default' }) {

    const history = useHistory()

    const { data, fetch } = usePagination({ dataset: photosData })
    // console.log('photosData', photosData)
    // return <Loading />

    return data.length > 0 ? (
        <>
            <Main>
                {data.map((el, index) => (
                    <PhotoSingle 
                        key={`${index}-${el.id}`}
                        data={el}
                        mode={mode}
                    />
                ))}
            </Main>
            {fetch && <Loading />}
        </>
    ) : (<Loading />)
}

export default PhotoCard;