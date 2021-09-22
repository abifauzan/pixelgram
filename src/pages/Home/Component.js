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
    gap: 10px;

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
    padding: 20px 0;
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

export const SplashContainer = styled.main`
    width: 100vw;
    min-height: 100vh;
    background: ${Color.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h2 {
        ${Font({
            size: '3rem',
            weight: TextWeight.medium,
            lineHeight: '2rem'
        })}
        text-align: center;
        padding: 16px 0 30px;

        span {
            ${Font({
                size: '1.5rem',
                color: Color.primary,
                weight: TextWeight.medium,
                lineHeight: '2rem'
            })}
        }
    }

    span.desc {
        ${Font({
            size: TextSize.heading.sm,
            weight: TextWeight.medium,
        })}
        padding: 0 0 20px;
    }
`

export const AvatarGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 70px);
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    row-gap: 20px;
    padding: 0 50px;

    /* ${Media.tab`
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    `}   */
`

export const AvatarItem = styled.div`
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-radius: 999px;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 999px;
    }

    &:last-child:nth-child(3n-2) {
        grid-column-end: 3;
    }
`