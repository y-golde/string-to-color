import strToColorObject from './strToObj';
import getComplementary from './Util/complementary';

const strToGradient = (str: string) => {
    const color = strToColorObject(str);
    const { r, g, b } = color;
    const c = getComplementary(color);

    return `linear-gradient(45deg, rgba(${r} , ${g}, ${b}), rgba(${c.r}, ${c.b}, ${c.g}))`;
};

export default strToGradient;
