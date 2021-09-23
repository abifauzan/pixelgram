import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonStyled } from './ButtonStyle';

function Button({ onclick, children, svg = false, filled = false}) {

    return (
        <ButtonStyled onClick={onclick} svg={svg} filled={filled}>
            {children}
        </ButtonStyled>
    );
}

export default Button;