import { css } from 'styled-components'
import Color from './Color';

export const TextSize = {
    body: {
        xl: '1.25rem',
        lg: '1.125rem',
        nm: '1rem',
        sm: '0.875rem',
        xs: '0.75rem',
    },
    heading: {
        xxxl: '3rem',
        xxl: '2.5rem',
        xl: '2rem',
        lg: '1.875rem',
        nm: '1.5rem',
        sm: '1.25rem',
        xs: '1.125rem',
    }
}

export const TextWeight = {
    light: '300',
    reguler: '400',
    medium: '500',
    bold: '700',
}

export const getColor = (mode) => {
    switch(mode) {
        case 'primary':
            return Color.primary
        case 'dark':
            return Color.dark
        case 'white':
            return Color.white
        default:
            return Color.primary
    }
}

export const Font = ({
    isPixel = false,
    size,
    color = Color.dark,
    weight = TextWeight.reguler,
    lineHeight = 'normal',
    letterSpacing = 'normal'
}) => css`
    font-family: ${isPixel ? "'VT323', monospace" : "'Ubuntu', 'sans-serif'"};
    font-size: ${size};
    color: ${color};
    font-weight: ${weight};
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing};
`