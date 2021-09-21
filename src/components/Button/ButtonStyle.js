import styled, { css } from "styled-components";
import { Font, getColor, TextSize, TextWeight } from "../../styles/Mixin";
import Color from '../../styles/Color';

const shadowWidth = '4px'
const outlineWidth = '4px'

export const ButtonStyled = styled.div`
    margin: 0 0 0 5px;
    align-self: flex-start;
    padding: 8px 10px;
    /* width: auto; */
    background: ${Color.white};
    ${Font({
        isPixel: true,
        size: TextSize.body.lg,
        color: Color.dark,
    })}
    display: inline-block;
    position: relative;
    text-align: center;
    box-shadow: inset -${shadowWidth} -${shadowWidth} 0px 0px ${Color.grey};
    cursor: pointer;

    &:hover,
    &:focus {
        background: ${Color.grey};
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
`