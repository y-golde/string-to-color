import { MIN_COLOR_VALUE as min, MAX_COLOR_VALUE as max } from './constants/COLOR_VALUES_RANGE';

const squishValue = (val: number) => {
    if (val > max) {
        return max - (255 - val);
    } else if (val < min) {
        return 2 * min + val;
    }
    return val;
};

export default squishValue;
