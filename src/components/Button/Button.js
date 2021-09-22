import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonStyled } from './ButtonStyle';

function Button({ onclick, children}) {

    return (
        <ButtonStyled onClick={onclick}>
            {children}
        </ButtonStyled>
    );
}

export default Button;