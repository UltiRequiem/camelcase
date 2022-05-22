export const UPPERCASE = /[\p{Lu}]/u;

export const LOWERCASE = /[\p{Ll}]/u;

export const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;

export const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;

export const SEPARATORS = /[_.\- ]+/;

export const LEADING_SEPARATORS = new RegExp("^" + SEPARATORS.source);

export const SEPARATORS_AND_IDENTIFIER = new RegExp(
  SEPARATORS.source + IDENTIFIER.source,
  "gu",
);

export const NUMBERS_AND_IDENTIFIER = new RegExp(
  "\\d+" + IDENTIFIER.source,
  "gu",
);

type modifyCase = (arg: string) => string;

export const preserveCamelCase = (
  string: string,
  toLowerCase: modifyCase,
  toUpperCase: modifyCase,
) => {
  let isLastCharLower = false;
  let isLastCharUpper = false;
  let isLastLastCharUpper = false;

  for (let i = 0; i < string.length; i++) {
    const character = string[i];

    if (isLastCharLower && UPPERCASE.test(character)) {
      string = string.slice(0, i) + "-" + string.slice(i);
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      i++;
    } else if (
      isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)
    ) {
      string = string.slice(0, i - 1) + "-" + string.slice(i - 1);
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower = toLowerCase(character) === character &&
        toUpperCase(character) !== character;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = toUpperCase(character) === character &&
        toLowerCase(character) !== character;
    }
  }

  return string;
};

export const preserveConsecutiveUppercase = (
  input: string,
  toLowerCase: modifyCase,
) => {
  LEADING_CAPITAL.lastIndex = 0;

  return input.replace(LEADING_CAPITAL, (m1) => toLowerCase(m1));
};

export const postProcess = (input: string, toUpperCase: modifyCase) => {
  SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
  NUMBERS_AND_IDENTIFIER.lastIndex = 0;

  return input.replace(
    SEPARATORS_AND_IDENTIFIER,
    (_, identifier) => toUpperCase(identifier),
  )
    .replace(NUMBERS_AND_IDENTIFIER, (m) => toUpperCase(m));
};
