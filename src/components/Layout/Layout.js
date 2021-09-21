import styled, { css } from "styled-components";
import { sizes } from '../../styles/Media';

export const Flex = styled.main`
    width: 100%;
    display: flex;
    flex-direction: ${({ direction }) => direction === 'column' ? 'column' : 'row'};
    align-items: center;
    position: relative;
    overflow: hidden;
`

export const Container = styled.section`
    width: 100%;
    max-width: ${({ fluid }) => fluid ? '100vw' : `${sizes.laptop}px`};
    display: flex;
    flex-direction: column;
    text-align: ${({ center }) => center ? 'center' : 'left'}
`