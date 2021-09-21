export const animateFromLeft = {
    initial: {
        opacity: 0,
        x: '-200px',
    },
    enter: {
        opacity: 1,
        x: 0
    },
    exit: {
        opacity: 0,
        x: '-200px'
    }
}

export const animateFromRight = {
    initial: {
        opacity: 0,
        x: '200px',
    },
    enter: {
        opacity: 1,
        x: 0
    },
    exit: {
        opacity: 0,
        x: '200px'
    }
}

export const animateFromBottom = {
    initial: {
        opacity: 0,
        y: '200px',
    },
    enter: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 0,
        y: '200px'
    }
}

export const animateOpacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1
    }, 
    exit: {
        opacity: 0
    }
}