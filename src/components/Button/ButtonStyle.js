import styled, { css } from "styled-components";
import { Font, getColor, TextSize, TextWeight } from "../../styles/Mixin";
import Color from '../../styles/Color';
import Media from "../../styles/Media";

const shadowWidth = '4px'
const outlineWidth = '4px'

export const ButtonStyled = styled.div`
    margin: 0 0 0 5px;
    align-self: flex-start;
    padding: 8px 10px;
    /* width: auto; */
    background: ${(props) => props.filled ? Color.secondary : props.disabled ? Color.grey : Color.white};
    ${Font({
        isPixel: true,
        size: TextSize.body.lg,
        color: Color.dark,
    })}
    display: inline-block;
    position: relative;
    text-align: center;
    box-shadow: inset -${shadowWidth} -${shadowWidth} 0px 0px ${(props) => props.filled ? Color.secondaryDark : Color.grey};
    cursor: pointer;

    ${Media.tab`
        /* padding: 10px 20px; */
        padding: ${(props) => props.svg === true ? '8px 12px' : '10px 20px'};

        ${Font({
            isPixel: true,
            size: TextSize.heading.nm,
            color: Color.dark,
        })}
    `}

    &:hover,
    &:focus {
        background: ${(props) => props.filled ? Color.secondaryDark : Color.grey};
        box-shadow: inset (-${shadowWidth}*1.5) (-${shadowWidth}*1.5) 0px 0px ${Color.primary};
    }

    &:active {
        box-shadow: inset ${shadowWidth} ${shadowWidth} 0px 0px ${Color.primary};
    }

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: content-box;
    }

    &::before {
        top: -${outlineWidth};
        left: 0;
        border-top: ${outlineWidth} #000 solid;
        border-bottom: ${outlineWidth} #000 solid;
    }

    &::after {
        left: -${outlineWidth};
        top: 0;
        border-left: ${outlineWidth} black solid;
        border-right: ${outlineWidth} black solid;
    }

    svg {
        color: ${(props) => props.filled ? Color.white : Color.dark};
    }
`