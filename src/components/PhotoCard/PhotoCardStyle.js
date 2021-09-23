import styled from "styled-components";
import Media from "../../styles/Media";
import { Font, TextSize, TextWeight } from "../../styles/Mixin";

export const Main = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    column-gap: 30px;
    row-gap: 40px;

    ${Media.tab`
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    `}
`

export const Image = styled.img`
    width: 100%;
    position: relative; 
    border: 4px solid #000;
    box-shadow: 6px -6px 0px 0px rgba(0,0,0,1);
    transition: all .2s ease-in;
`

export const Item = styled.figure`
    /* width: 300px; */
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 12px;
    cursor: pointer;

    &:hover ${Image} {
        box-shadow: 0px 0px 0px 0px rgba(0,0,0,1);
    }

    ${Media.tab`
        gap: 18px;
    `}
`

export const ItemName = styled.figcaption`
    ${Font({
        size: TextSize.body.nm,
        weight: TextWeight.reguler,
    })}
    text-transform: capitalize;
`

