import React, { useRef } from 'react';
import Loading from '../Loading/Loading';
import { Item, Image, Main, ItemName } from './PhotoCardStyle';
import { useHistory } from 'react-router';
import usePagination from '../../hooks/usePagination';
import useIntersection from '../../hooks/useIntersection';
import { cardVariants1 } from '../../styles/Transition';

function PhotoSingle({ data }) {

    const history = useHistory()

    const boxRef = useRef(null)
    const hitScreen = useIntersection(boxRef)

    return (
        <Item 
            onClick={() => history.push(`/photo/${data.id}`)}
            ref={boxRef}
            initial='hide'
            animate={ hitScreen ? 'show' : 'hide'}
            exit='hide'
            variants={cardVariants1}
        >
            <Image src={data.url} alt={data.title} />
            <ItemName>{data.title}</ItemName>
        </Item>
    );
}

export default PhotoSingle;