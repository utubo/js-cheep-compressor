// cheep-compressor
// Copyright (c) 2021 utubo under the [MIT](https://opensource.org/licenses/mit-license.php)
{
	let SYMBOLS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let checkLen = (s, l) => {if (l < s.length) throw 'too long';};
	var CCCompress = (str, maxLength = 500) => {
		checkLen(str, maxLength);
		let seed = '';
		let commands = '';
		let MAX_RANGE = SYMBOLS.length - 1;
		let STR_LENGTH = str.length;
		let i = 0;
		while (i < STR_LENGTH) {
			let ss = str.slice(0, i);
			let from = i - MAX_RANGE;
			let head;
			let len;
			for (let j = 3; j <= STR_LENGTH - i; j ++) {
				let k = ss.indexOf(str.substr(i, j), from);
				if (k === -1) break;
				head = ss.length - k;
				len = j;
			}
			if (len) {
				commands += SYMBOLS[head] + SYMBOLS[len];
			} else {
				let c = str[i];
				seed += c;
				len = 1;
				while (c === str[i + len] && len < MAX_RANGE) len ++;
				if (2 < len) {
					commands += SYMBOLS[1] + SYMBOLS[len];
				} else {
					len = 1;
					let d = SYMBOLS.indexOf(commands.substr(-1, 1));
					if (commands.substr(-2, 1) === SYMBOLS[0] && d < MAX_RANGE){
						commands = commands.slice(0, -1) + SYMBOLS[d + 1];
					} else {
						commands += SYMBOLS[0] + '1';
					}
				}
			}
			i += len;
		}
		while (commands.substr(-2, 1) === SYMBOLS[0]) {
			commands = commands.slice(0, -2);
		}
		return commands+ '_' + seed;
	};
	var CCDecompress = (data, maxLength = 500) => {
		checkLen(data, maxLength);
		let out = '';
		let i = data.indexOf('_');
		let commands = data.substr(0, i);
		let seed = data.substr(i + 1);
		i = 0;
		for (let j = 0; j < commands.length; j += 2) {
			checkLen(out, maxLength);
			let c = SYMBOLS.indexOf(commands[j]);
			let d = SYMBOLS.indexOf(commands[j + 1]);
			switch (c) {
				case 0:
					out += seed.substr(i, d);
					i += d;
					break;
				case 1:
					out += seed[i].repeat(d);
					i ++;
					break;
				default:
					out += out.substr(out.length - c, d);
			}
		}
		out += seed.substr(i);
		return out;
	};
}
