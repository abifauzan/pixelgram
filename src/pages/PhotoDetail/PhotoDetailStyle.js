import styled from "styled-components";
import { Font, TextSize, TextWeight } from '../../styles/Mixin';
import Color from '../../styles/Color';

export const MobileContainer = styled.main`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: flex-end;
    background: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const MobileContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    background: linear-gradient(179.89deg, rgba(16, 21, 24, 0) 1.66%, #101518 98%);
    padding: 64px 16px 48px;

    div.users {
        flex: 2;
        display: flex;
        gap: 10px;
        align-items: flex-start;

        div.avatar {
            width: 35px;
            height: 35px;
            background: lightblue;
            border-radius: 999px;
            flex-shrink: 0;
        }

        div.userInfo {
            display: flex;
            flex-direction: column;
            gap: 10px;

            span.username {
                ${Font({
                    size: TextSize.body.nm,
                    color: Color.white,
                    weight: TextWeight.medium,
                })}
                text-transform: capitalize;
            }

            span.album {
                ${Font({
                    size: TextSize.body.sm,
                    color: Color.white,
                    weight: TextWeight.reguler,
                    lineHeight: '1.2rem'
                })}
                text-transform: capitalize;
            }
        }
    }

    div.icons {
        flex: 1;
        display: flex;
        gap: 15px;
        align-items: center;
        justify-content: flex-end;
    }
`
export const ButtonAction = styled.button`
    width: 35px;
    height: 35px;
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.active ? Color.secondary : Color.white};
    border: 1px solid ${Color.darkLight};

    svg {
        color: ${(props) => props.active ? Color.white : Color.dark};
        width: 20px;
        height: 20px;
    }
`

export const ButtonClose = styled(ButtonAction)`
    position: absolute;
    top: 16px;
    right: 16px;

    svg {
        width: 30px;
        height: 30px;
    }
`

export const Title = styled.h2`
    ${Font({
        size: TextSize.heading.xl,
        weight: TextWeight.medium,
        lineHeight: '2.2rem',
    })}
    text-transform: capitalize;
    margin: 0;
    text-align: left;
`
export const Subtitle = styled.p`
    ${Font({
        color: Color.darkLight,
        size: TextSize.body.lg,
        weight: TextWeight.reguler,
    })}
    margin: 0;
    text-align: left;

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

export const DesktopContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 32px 0 0;
    overflow: hidden;
`

export const DesktopMain = styled.div`
    width: 100%;
    display: flex;
    gap: 32px;

    div.boxImg {
        flex: 6;
        border: 4px solid #000;
        box-shadow: 6px -6px 0px 0px rgba(0,0,0,1);

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    div.content {
        flex: 4;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`

export const DesktopCommentArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    textarea {
        margin-top: 16px;
        /* width: 100%; */
        height: 100px;
        padding: 16px;
        background: #eaeaea;
        text-align: left;
        border-radius: 15px;

        ${Font({
            size: TextSize.body.sm,
            color: Color.dark,
        })}

        &::placeholder {
            color: ${Color.grey};
        }
    }

    button {
        width:180px;
        padding: 16px;
        background: ${Color.primary};
        border-radius: 10px;
        ${Font({
            size: TextSize.body.lg,
            color: Color.white,
        })}
        align-self: flex-start;
    }
`

export const DesktopCommentList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;

    p {
        margin: 0;
        text-transform: uppercase;
        ${Font({
            size: TextSize.body.lg,

        })}
    }
`

export const CommentArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
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