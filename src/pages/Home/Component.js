import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Media from '../../styles/Media';
import Color from '../../styles/Color';
import { Font, TextSize, TextWeight } from '../../styles/Mixin';

export const LogoStyled = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    padding: 20px 0;

    img {
        width: 80px;

        ${Media.tab`
            width: 140px;
        `}
    }

    span {
        ${Font({
            isPixel: true,
            size: TextSize.heading.xl,
            letterSpacing: '0.2rem'
        })}

        ${Media.tab`
            ${Font({
                isPixel: true,
                size: TextSize.heading.xxxl,
                letterSpacing: '0.2rem'
            })}
        `}
    }
`

export const HeroCaption = styled.h2`
    margin: 0;
    ${Font({
        size: TextSize.heading.xxl,
        color: Color.darkLight,
        weight: TextWeight.reguler
    })}

    ${Media.tab`
        ${Font({
            size: TextSize.heading.xxxl,
            color: Color.darkLight,
            weight: TextWeight.reguler
        })}
    `}

    a {
        position: relative;
        
        &::after {
            content: '';
            width: 60%;
            height: 15px;
            background: ${Color.primary};
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: -1;
            transition: width 0.2s ease-in-out;
        }

        &:hover::after {
            width: 100%;
        }
    }
`

export const HeroSubCaption = styled.span`
    ${Font({
        size: TextSize.body.lg,
        color: Color.dark,
        lineHeight: '1.7rem',
        weight: TextWeight.reguler
    })}
    padding: 30px 16px;
`

export const FilterBox = styled.div`
    width: 100%;
    padding: 0 16px;
    border: 3px solid ${Color.dark};
    display: flex;
    text-align: center;

    input {
        width: 100%;
        padding: 8px;

        ${Font({
            size: TextSize.body.lg,
            color: Color.dark,
            weight: TextWeight.reguler
        })}

        &::placeholder {
            color: ${Color.grey}
        }
    }

    button {
        
    }
`