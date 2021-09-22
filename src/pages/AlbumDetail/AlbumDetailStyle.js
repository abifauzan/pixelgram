import styled from "styled-components";
import { Font, TextSize, TextWeight } from "../../styles/Mixin";
import Color from '../../styles/Color';

export const Title = styled.h2`
    ${Font({
        size: TextSize.heading.xl,
        weight: TextWeight.medium,
        lineHeight: '2.2rem',
    })}
    text-transform: capitalize;
    padding: 40px 20px 40px;
    margin: 0;
    text-align: center;
`
export const Subtitle = styled.p`
    ${Font({
        color: Color.darkLight,
        size: TextSize.body.lg,
        weight: TextWeight.reguler,
    })}
    margin: 0;
    text-align: center;
    padding: 0 0 60px;

    a {
        font-weight: ${TextWeight.medium};
        position: relative;

        &::after {
            content: '';
            width: 50%;
            height: 4px;
            background: ${Color.primary};
            position: absolute;
            left: 0;
            bottom: -8px;
            transition: width 0.2s ease-in-out;
        }

        &:hover::after {
            width: 100%;
        }
    }
`