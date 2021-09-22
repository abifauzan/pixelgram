import styled from "styled-components";
import Media from "../../styles/Media";
import { Font, TextSize, TextWeight } from "../../styles/Mixin";

export const Main = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    column-gap: 20px;
    row-gap: 50px;
    padding: ${({ nopadding }) => nopadding ? 0 : '0 16px'}

    ${Media.tab`
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    `}
`

export const Item = styled.article`
    /* width: 300px; */
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 12px;
`

export const ItemName = styled.span`
    ${Font({
        size: TextSize.body.nm,
        weight: TextWeight.reguler,
    })}
    text-transform: capitalize;
`

export const StackImg = styled.figure`
    width: 100%;
    height: 200px;
    position: relative;

    ${Media.tab`
        height: 250px;
    `}

    img.level3,
    img.level2,
    img.level1 {
        position: absolute;
        border-radius: 4px;
    }

    img.level3 {
        width: 90%;
        height: 100%;
        z-index: 3;
        bottom: 0;
        left: 0;

        ${Media.tab`
            width: 85%;
        `}
    }

    img.level2 {
        width: 90%;
        height: 90%;
        z-index: 2;
        bottom: 8px;
        left: 8px;

        ${Media.tab`
            width: 86%;
        `}
    }

    img.level1 {
        width: 80%;
        height: 80%;
        z-index: 1;
        bottom: 16px;
        left: 32px;
    }
`