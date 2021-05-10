import strToColorObject from './strToObj';

const strToHex = (str: string) => {
    const color = strToColorObject(str);
    const { r, g, b } = color;

    return `#${r.toString(16)}${b.toString(16)}${g.toString(16)}`;
};

export default strToHex;
