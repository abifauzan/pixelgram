import styled from "styled-components";
import Color from '../../styles/Color';
import { TextSize, Font, TextWeight } from "../../styles/Mixin";

export const PopupContainer = styled.div`
    position: absolute;
    z-index: 3;
    width: 100vw;
    height: 42vh;
    bottom: 0;
    left: 0;
    background: ${Color.white};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 16px 16px 32px;
`

export const PopupTop = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 8px;

    span {
        ${Font({
            size: TextSize.body.sm,

        })}
        text-transform: uppercase;
    }

    button {
        
        svg {
            width: 25px;
            height: 25px;
        }
    }
`

export const CommentArea = styled.div`
    width: 100%;
    height: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 0 0 10px;

    &::-webkit-scrollbar {
        width: 0px; /* Remove scrollbar space */
        background: transparent; /* Optional: just make scrollbar invisible */
    }
`

export const CommentSingle = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;

    div.avatar {
        flex-shrink: 0;
        width: 35px;
        height: 35px;
        background: lightblue;
        border-radius: 999px;
    }

    div.content {
        display: flex;
        flex-direction: column;
        gap: 5px;

        span.username {
            ${Font({
                size: TextSize.body.sm,
                weight: TextWeight.medium,
            })}
            text-transform: capitalize;
        }

        span.comment {
            ${Font({
                size: TextSize.body.sm,
                weight: TextWeight.reguler,
                lineHeight: '1.2rem',
            })}
        }
    }
`

export const CommentInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;


    input {
        /* width: 100%; */
        padding: 15px 80px 15px 15px;
        background: #eaeaea;
        text-align: left;
        border-radius: 25px;

        ${Font({
            size: TextSize.body.sm,
            color: Color.dark,
        })}

        &::placeholder {
            color: ${Color.grey};
        }
    }

    button {
        padding: 13px 20px;
        background: ${Color.primary};
        text-align: center;
        border-radius: 25px;
        position: absolute;
        top: 0;
        right: 0;
        border: 1px solid transparent;

        &:disabled {
            background: ${Color.grey};
        }

        ${Font({
            size: TextSize.body.sm,
            color: Color.white,
        })}
    }
`