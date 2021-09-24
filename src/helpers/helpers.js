import impostor1 from '../assets/image/avatar/impostor_1.png';
import impostor2 from '../assets/image/avatar/impostor_2.png';
import impostor3 from '../assets/image/avatar/impostor_3.png';
import impostor4 from '../assets/image/avatar/impostor_4.png';
import impostor5 from '../assets/image/avatar/impostor_5.png';
import impostor6 from '../assets/image/avatar/impostor_6.png';
import impostor7 from '../assets/image/avatar/impostor_7.png';
import impostor8 from '../assets/image/avatar/impostor_8.png';
import impostor9 from '../assets/image/avatar/impostor_9.png';
import impostor10 from '../assets/image/avatar/impostor_10.png';

// Check object length, return boolean
export const checkObjectLength = object => Object.keys(object).length > 0

export const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

export const impostorsImg = [
    impostor1, impostor2, impostor3, impostor4, impostor5, impostor6, impostor7, impostor8, impostor9, impostor10
]