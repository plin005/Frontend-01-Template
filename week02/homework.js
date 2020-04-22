//1. 写一个正则表达式 匹配所有 Number 直接量
const isNumberLiterals = number => {
  const regex = new RegExp(
    /[\d]{1,16}|(?:[1-9]+\.[\d]+)|(NaN)|(Infinity)|^0[xX][1-9a-f]+|^0(o|O)[0-7]+|^0(b|B)[0-1]+/
  );
  return regex.test(number);
};

// 2. utf-8 encoding
const utf8Encoding = string => {
  var utf8 = [];
  for (var i = 0; i < string.length; i++) {
    var charcode = string.charCodeAt(i);
    if (charcode < 0x80) utf8.push(charcode);
    else if (charcode < 0x800) {
      utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
    } else if (charcode < 0xd800 || charcode >= 0xe000) {
      utf8.push(
        0xe0 | (charcode >> 12),
        0x80 | ((charcode >> 6) & 0x3f),
        0x80 | (charcode & 0x3f)
      );
    } else {
      i++;
      charcode = ((charcode & 0x3ff) << 10) | (string.charCodeAt(i) & 0x3ff);
      utf8.push(
        0xf0 | (charcode >> 18),
        0x80 | ((charcode >> 12) & 0x3f),
        0x80 | ((charcode >> 6) & 0x3f),
        0x80 | (charcode & 0x3f)
      );
    }
  }
  return utf8;
};

//3. 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
const isStringLiterals = string => {
  const regex = new RegExp(
    /(^\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}$)|((?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*)/
  );
  return regex.test(string);
};

module.exports = {
  isNumberLiterals,
  utf8Encoding,
  isStringLiterals
};
