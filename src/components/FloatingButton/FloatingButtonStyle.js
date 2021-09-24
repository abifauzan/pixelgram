import styled from "styled-components";
import { motion } from 'framer-motion';
import Media, { sizes } from "../../styles/Media";

export const Block = styled(motion.div)`
    position: fixed;
    right: 16px;
    bottom: 16px;
    z-index: 3;

    ${Media.tab`
        width: ${sizes.laptop}px;
        right: unset;
        bottom: 48px;
        display: flex;
        justify-content: flex-end;
    `}
`

export const BlockLink = styled.button`
    width: 60px;
    height: 60px;
    cursor: pointer;

    ${Media.tab`
        position: relative;
        left: 48px;
    `}

    img {
        width: 100%;
        height: 100%;
    }
`