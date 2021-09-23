import styled from "styled-components";
import { Font, TextSize, TextWeight } from "../../styles/Mixin";
import Color from '../../styles/Color';

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

    div.avatar {
        width: 40px;
        height: 40px;
        flex-shrink: 0;
        border-radius: 999px;

        img {
            width: 100%;
            border-radius: 999px;
        }
    }

    div.user {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-right: auto;

        span.welcome {
            ${Font({
                size: TextSize.body.nm,
                color: Color.grey,
                weight: TextWeight.reguler,
            })}
        }

        span.email {
            ${Font({
                size: TextSize.body.sm,
                color: Color.dark,
                weight: TextWeight.medium,
            })}
        }
    }

    button {
        svg {
            width: 25px;
            height: 25px;
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
`

export const TabItem = styled.div`
    border-top: 1px solid ${({ active }) => active ? Color.primary : 'transparent'};
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px 0;

    span {
        ${Font({
            size: TextSize.body.sm,
            color: ({ active }) => active ? Color.dark : Color.grey,
            weight: TextWeight.reguler,
        })}
        text-transform: uppercase;

    }

    svg {
        width: 18px;
        height: 18px;
        color: ${({ active }) => active ? Color.dark : Color.grey}
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
`

export const ProfileData = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    span.title {
        ${Font({
            size: TextSize.body.sm,
            color: Color.dark,
            weight: TextWeight.medium,
        })}
        text-transform: capitalize;
    }

    span.content {
        ${Font({
            size: TextSize.body.sm,
            color: Color.darkLight,
            weight: TextWeight.reguler,
        })}
        /* text-transform: capitalize; */
    }
`