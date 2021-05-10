# String To Color

String to color is a package that offeres _pretty_ colors and gradients from string.

```bash
npm i @y-golde/string-to-color
```

## What makes to color 'pretty'?

From my experience colors that are too dark look to much alike (same for colors that are too bright),
so I've limited the generated rgb values to 50-200 (by correcting for values over or under the allowed range).

The gradient is generated from the compiled color + its complementary color.

## Usage

### importing

The package currently offers 4 functions

```typescript
import { strToColorObject, strToHex, strToRGBString, strToGradient } from '@y-golde/string-to-color';
```

### strToColorObject

this function accepts a string and returns an object with r,g and b values (numbers)

```typscript
const toObject = strToColorObject('example'); // Object {r: 78, g: 163, b: 183}
```

### strToHex

this function accepts a string and returns the color as a hex (string)

```typscript
const toObject = strToHex('example'); // "#4eb7a3"
```

### strToRGBString

this function accepts a string and returns the color as a rgb string (for css uses)

```typscript
const toObject = strToRGBString('example'); // "rgb(78,163,183)"
```

### strToGradient

this function accepts a string and returns the color as a linear gradient to its complementary (for css background)

```typscript
const toObject = strToGradient('example'); // "linear-gradient(45deg, rgba(78 , 163, 183), rgba(183, 78, 98))"
```
