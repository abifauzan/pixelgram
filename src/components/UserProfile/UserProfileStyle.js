import styled from "styled-components";
import { Font, TextSize, TextWeight } from "../../styles/Mixin";
import Color from '../../styles/Color';
import Media from "../../styles/Media";

export const ProfileContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
`

export const Profile = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding: 0 16px 16px;

    ${Media.tab`
        gap: 32px;
        padding: 0 32px 32px;
    `};

    div.avatar {
        width: 60px;
        height: 60px;
        flex-shrink: 0;

        ${Media.tab`
            width: 100px;
            height: 100px;
        `};

        img {
            width: 100%;
            object-fit: contain;
            /* border-radius: 999px; */
        }
    }

    div.user {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-right: auto;

        ${Media.tab`
            gap: 12px;
        `};

        span.welcome {
            ${Font({
                size: TextSize.body.nm,
                color: Color.grey,
                weight: TextWeight.reguler,
            })};
        }

        span.name {
            ${Font({
                size: TextSize.body.sm,
                color: Color.dark,
                weight: TextWeight.medium,
            })}

            ${Media.tab`
                ${Font({
                    size: TextSize.heading.lg,
                    color: Color.dark,
                    weight: TextWeight.reguler,
                })}
            `};
        }

        span.email {
            ${Font({
                size: TextSize.body.sm,
                color: Color.darkLight,
                weight: TextWeight.reguler,
            })}

            ${Media.tab`
                ${Font({
                    size: TextSize.heading.sm,
                    color: Color.darkLight,
                    weight: TextWeight.reguler,
                })}
            `};
        }
    }

    button {
        svg {
            width: 25px;
            height: 25px;

            &:hover {
                color: ${Color.danger};
            }

            ${Media.tab`
                width: 50px;
                height: 50px;
            `};
        }
    }
`

export const TabHeader = styled.nav`
    width: calc(100% - 36px);
    display: flex;
    justify-content: ${({ mode }) => mode === 'profile' ? 'space-between' : 'space-around'};
    align-items: center;
    border-top: 1px solid ${Color.grey};
    margin: 20px 0;

    ${Media.tab`
        width: calc(100% - 60px);
        justify-content: center;
        gap: 48px;
    `};
`

export const TabItem = styled.div`
    border-top: 1px solid ${({ active }) => active ? Color.primary : 'transparent'};
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px 0;
    cursor: pointer;
    transition: all .2s ease-in;

    &:hover {
        border-top: 1px solid ${Color.dark};
    }

    &:hover span,
    &:hover svg {
        color: ${Color.dark};
    }

    ${Media.tab`
        gap: 10px;
        padding: 20px 0;
    `};

    span {
        ${Font({
            size: TextSize.body.sm,
            color: ({ active }) => active ? Color.dark : Color.grey,
            weight: TextWeight.reguler,
        })}
        transition: all .2s ease-in;
        text-transform: uppercase;

        ${Media.tab`
            ${Font({
                size: TextSize.body.nm,
                color: ({ active }) => active ? Color.dark : Color.grey,
                weight: TextWeight.reguler,
            })}
        `};

    }

    svg {
        width: 18px;
        height: 18px;
        color: ${({ active }) => active ? Color.dark : Color.grey};
        transition: all .2s ease-in;

        ${Media.tab`
            width: 28px;
            height: 28px;
        `};
    }
`

export const TabContent = styled.div`
    display: ${({ active }) => active ? 'flex' : 'none'};
    flex-direction: column;
    width: 100%;
`

export const ProfileDataContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 16px;

    ${Media.tab`
        padding: 0 48px;
    `};
`

export const ProfileData = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    ${Media.tab`
        gap: 12px;
    `};

    span.title {
        ${Font({
            size: TextSize.body.sm,
            color: Color.dark,
            weight: TextWeight.medium,
        })}
        text-transform: capitalize;

        ${Media.tab`
            ${Font({
                size: TextSize.body.lg,
                color: Color.dark,
                weight: TextWeight.medium,
            })}
        `};
    }

    span.content {
        ${Font({
            size: TextSize.body.sm,
            color: Color.darkLight,
            weight: TextWeight.reguler,
        })}

        ${Media.tab`
            ${Font({
                size: TextSize.body.nm,
                color: Color.darkLight,
                weight: TextWeight.reguler,
            })}
        `};
    }
`