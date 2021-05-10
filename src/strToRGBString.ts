import strToColorObject from './strToObj';

const strToRGBString = (str: string) => {
    const color = strToColorObject(str);
    const { r, g, b } = color;
    return `rgb(${r},${g},${b})}`;
};

export default strToRGBString;
