This is a very very cheep compressor

## Demo
https://utubo.github.io/js-cheep-compressor/demo.html

## Usage
```javascript
const src = 'abcdefg000000000abcdefg';
const data = CCCompress(src);
// -> '0719g7_abcdefg0'

const revert = CCDecompress(data);
// -> 'abcdefg000000000abcdefg'
```

### Parameters
```javascript
CCCompress(src, maxLength)
CCDecompress(data, maxLength)
```

## License
Copyright (c) 2021 utubo under the [MIT](https://opensource.org/licenses/mit-license.php)

