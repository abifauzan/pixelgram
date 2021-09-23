import React from 'react';
import styled from 'styled-components';
import Color from '../../styles/Color';
import { Font, TextSize, TextWeight } from '../../styles/Mixin';

const Box = styled.div`
    width: 100%;
    padding: 20px 0;
    background: ${Color.warning};
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        ${Font({
            size: TextSize.body.lg,
            color: Color.dark,
            weight: TextWeight.medium,
        })}
    }
`

function Alert({ children }) {
    return (
        <Box>
            <span>{children}</span>
        </Box>
    );
}

export default Alert;