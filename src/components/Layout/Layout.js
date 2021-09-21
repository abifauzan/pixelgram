import styled, { css } from "styled-components";
import Media, { sizes } from '../../styles/Media';
import { Link } from 'react-router-dom';
import { Font, TextSize, TextWeight } from "../../styles/Mixin";
import glasses_img from '../../assets/image/glasses.png'
import Button from "../Button/Button";
import Color from '../../styles/Color';
import bg_header from '../../assets/image/bg_header.jpg';

export const Flex = styled.main`
    width: 100%;
    display: flex;
    flex-direction: ${({ direction }) => direction === 'column' ? 'column' : 'row'};
    align-items: center;
    position: relative;
    overflow: hidden;
`

export const Container = styled.section`
    width: 100%;
    max-width: ${({ fluid }) => fluid ? '100vw' : `${sizes.laptop}px`};
    display: flex;
    flex-direction: column;
    text-align: ${({ center }) => center ? 'center' : 'left'};
`

export const HeaderGoBack = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        ${Font({
            color: Color.darkLight,
            size: TextSize.heading.xs,
            weight: TextWeight.medium
        })} 
    }

    div.btnBack {
        position: absolute;
        left: 0;
        top: 0;
    }
`

const Main = styled(Flex)`
    width: 100vw;
    flex-direction: column;
`

const MainHeader = styled.div`
    width: 100%;
    height: 200px;
    background: url(${bg_header});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    display: flex;
    align-items: flex-start;
`

const MainNavbar = styled.nav`
    max-width: ${sizes.laptop}px;
    width: 100%;
    padding: 20px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

const LogoStyled = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;

    img {
        width: 60px;

        ${Media.tab`
            width: 140px;
        `}
    }

    span {
        ${Font({
            isPixel: true,
            size: TextSize.heading.nm,
            letterSpacing: '0.1rem'
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

const MainContent = styled(Container)`
    background: ${Color.white};
    width: calc(100vw - 32px);
    padding: 30px 16px;
    position: relative;
    margin-top: -80px;

    ${Media.tab`
        max-width: ${sizes.laptop}px;
    `}
`

const MainLayout = ({ children }) => {

    return (
        <Main>
            <MainHeader>
                <MainNavbar>
                    <LogoStyled to='/'>
                        <img src={glasses_img} alt='Logo' />
                        <span>PXL.GRAM</span>
                    </LogoStyled>
                    <Button>
                        Profile
                    </Button>
                </MainNavbar>
            </MainHeader>

            <MainContent>
                {children}
            </MainContent>
        </Main>
    )
}

export default MainLayout