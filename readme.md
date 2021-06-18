This is a very very cheep compressor

## Demo
https://utubo.github.io/js-cheep-compressor/demo.html

## Usage
```javascript
const str = 'abcdefg000000000abcdefg';
const data = pdcEncode(str);
// -> '0719g7_abcdefg0'

const revert = pdcDecode(data);
// -> 'abcdefg000000000abcdefg'
```

### Parameters
```javascript
CCCompress(src, maxLength)
CCDeCompress(src, maxLength)
```

## License
Copyright (c) 2021 utubo under the [MIT](https://opensource.org/licenses/mit-license.php)

