import styled from "styled-components";
import Color from '../../styles/Color';
import { TextSize, Font, TextWeight } from "../../styles/Mixin";
import { ButtonStyled } from '../Button/ButtonStyle';

export const PopupContainer = styled.div`
    position: fixed;
    z-index: 3;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    div.overlay {
        width: 100vw;
        height: 100vh;
        background: transparent;
    }
`

export const PopupContent = styled.div`
    width: 100vw;
    height: auto;
    background: ${Color.white};
    position: absolute;
    bottom: 0;
    left: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    flex-direction: column;
    padding: 0 16px 30px;

    div.border {
        width: 70px;
        height: 4px;
        background: ${Color.primary};
        border-radius: 5px;
        margin: 30px 0;
        align-self: center;
    }

    span.copy {
        ${Font({
            size: TextSize.body.nm,
            weight: TextWeight.medium,
            color: Color.darkLight,
        })}
        padding: 0 0 20px;
    }

    div.options {
        width: 100%;
        border: 4px solid #000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }
`

export const OptionItem = styled.span`
    flex: 1;
    background: ${({ active }) => active ? '#000' : '#FFF'};
    text-transform: uppercase;
    padding: 15px 0;
    ${Font({
        size: TextSize.body.nm,
        weight: TextWeight.medium,
        color: ({ active }) => active ? '#FFF' : '#000',
    })};
`

export const InputSearch = styled.input`
    /* width: 100%; */
    padding: 15px;
    background: #eaeaea;
    ${Font({
        size: TextSize.body.nm,
        weight: TextWeight.medium,
    })};
    text-align: left;
    margin: 15px 0;
    border: 2px solid ${({ error }) => error ? Color.danger : 'transparent'};

    &:focus {
        border: 2px solid #000;
    }
`

export const ButtonSearch = styled(ButtonStyled)`
    padding: 10px 40px;
    align-self: center;
    font-size: ${TextSize.body.xl};
    margin: 20px 0 0;
`