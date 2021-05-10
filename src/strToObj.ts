import hashString from './Util/hashString';
import squishValue from './Util/squishValue';

const strToColorObject = (str: string) => {
    const seed = hashString(str);
    const r = squashSlice(seed.slice(0, 2));
    const g = squashSlice(seed.slice(2, 4));
    const b = squashSlice(seed.slice(4, 6));

    return {
        r,
        g,
        b,
    };
};

const squashSlice = (slice: string) => {
    const parsedSlice = parseInt(slice, 16);
    const NaNAccountedSlice = !Number.isNaN(parsedSlice) ? parsedSlice : 0;
    return squishValue(NaNAccountedSlice);
};

export default strToColorObject;
