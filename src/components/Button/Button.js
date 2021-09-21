import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonStyled } from './ButtonStyle';

function Button({ onclick, children}) {

    return (
        <ButtonStyled>
            {children}
        </ButtonStyled>
    );
}

export default Button;