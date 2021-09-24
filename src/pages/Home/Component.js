import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Media from '../../styles/Media';
import Color from '../../styles/Color';
import { Font, TextSize, TextWeight } from '../../styles/Mixin';
import { motion } from 'framer-motion';

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
    padding: 20px 10px;

    ${Font({
        isPixel: true,
        size: TextSize.heading.xxxl,
        color: Color.darkLight,
        weight: TextWeight.reguler
    })}

    ${Media.tab`
        ${Font({
            isPixel: true,
            size: TextSize.heading.xxxl,
            color: Color.darkLight,
            weight: TextWeight.reguler
        })}
    `}

    a {
        position: relative;

        ${Font({
            isPixel: true,
            size: TextSize.heading.xxxl,
            color: Color.darkLight,
            weight: TextWeight.reguler
        })}
        
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
        isPixel: true,
        size: TextSize.heading.nm,
        color: Color.dark,
        lineHeight: '1.7rem',
        weight: TextWeight.reguler
    })}
    padding: 30px 16px;

    ${Media.tab`
        ${Font({
            isPixel: true,
            size: TextSize.heading.lg,
            color: Color.dark,
            lineHeight: '1.7rem',
            weight: TextWeight.reguler
        })}
        width: 800px;
        align-self: center;
        padding: 50px 16px;
    `}
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

export const SplashContainer = styled(motion.main)`
    width: 100%;
    min-height: 100vh;
    background: ${Color.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 32px;
    position: relative;
    overflow: hidden;

    ${Media.tab`
        padding: 0;
    `}
    
    h2 {
        ${Font({
            isPixel: true,
            size: '3.2rem',
            lineHeight: '2rem'
        })}
        text-align: center;
        padding: 16px 0 30px;

        ${Media.tab`
            ${Font({
                isPixel: true,
                size: '6rem',
                lineHeight: '3.5rem'
            })}
            text-align: center;
            padding: 32px 0 50px;
        `}

        span {
            ${Font({
                isPixel: true,
                size: '1.5rem',
                color: Color.primary,
                lineHeight: '2.2rem'
            })}

            ${Media.tab`
                ${Font({
                    isPixel: true,
                    size: '3rem',
                    color: Color.primary,
                    lineHeight: '2.2rem'
                })}
            `}
        }
    }

    span.desc {
        ${Font({
            isPixel: true,
            size: TextSize.heading.nm,
            weight: TextWeight.medium,
        })}
        padding: 0 0 20px;

        ${Media.tab`
            ${Font({
                isPixel: true,
                size: TextSize.heading.xl,
                weight: TextWeight.medium,
            })}
            padding: 0 0 20px;
        `}
    }
`

export const AvatarGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 100px);
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    row-gap: 30px;
    padding: 0 50px;

    ${Media.tab`
        grid-template-columns: repeat(5, 150px);
        /* grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); */
        column-gap: 40px;
        row-gap: 40px;
    `}  
`

export const AvatarItem = styled.div`
    cursor: pointer;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;

    &:hover div.user {
        background: ${Color.primary};
    }

    &:hover div.user > span {
        color: ${Color.white};
    }
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    div.user {
        width: 100%;
        height: 70px;
        background: #FFF;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 6px;
        text-align: center;
        transition: all .1s ease-in;
        box-shadow:  20px 20px 60px #cfc8c8,
             -10px -10px 30px #ffffff;

        span {
            transition: all .1s ease-in;
            ${Font({
                size: TextSize.body.xs,
                weight: TextWeight.medium,
            })}

            ${Media.tab`
                ${Font({
                    size: TextSize.body.nm,
                    weight: TextWeight.medium,
                })}
            `}  
        }
    }

    &:last-child:nth-child(3n-2) {
        grid-column-end: 3;

        ${Media.tab`
            grid-column-end: unset;
        `} 
    }
`

export const SearchQueryBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 10px 16px 30px;
    text-align: center;

    ${Media.tab`
        gap: 16px;
    `} 

    span.title {
        ${Font({
            size: TextSize.body.nm,
            weight: TextWeight.reguler,
            color: Color.darkLight,
        })}

        ${Media.tab`
            ${Font({
                size: TextSize.body.lg,
                weight: TextWeight.reguler,
                color: Color.darkLight,
            })}
        `} 

        strong {
            font-weight: bold;
            color: ${Color.dark};
        }
    }
    span.content {
        ${Font({
            size: TextSize.body.xl,
            weight: TextWeight.bold,
        })}

        ${Media.tab`
            ${Font({
                size: TextSize.heading.nm,
                weight: TextWeight.bold,
            })}
        `} 
    }
`

export const BgLeft = styled.img`
    display: none;

    ${Media.tab`
        display: block;
        width: 400px;
        position: absolute;
        top: 0;
        left: -50px;
    `}
`

export const BgRight = styled.img`
    display: none;

    ${Media.tab`
        display: block;
        width: 400px;
        position: absolute;
        top: 0;
        right: -50px;
        transform: scale(-1, 1);
    `}
    
`