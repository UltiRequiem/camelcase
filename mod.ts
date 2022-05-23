/**
 * This module is browser compatible.
 *
 * Camel case
 *
 * https://github.com/UltiRequiem/camelcase
 *
 * https://ulti.js.org/camelcase
 *
 * Copyright (c) Eliaz Bobadilla.
 *
 * Released under the MIT License.
 *
 * @module
 */

export interface CamelCaseOptions {
  /**
		Uppercase the first character: `foo-bar` → `FooBar`.
		@default false
		*/
  readonly pascalCase?: boolean;

  /**
		Preserve the consecutive uppercase characters: `foo-BAR` → `FooBAR`.
		@default false
		*/
  readonly preserveConsecutiveUppercase?: boolean;

  /**
		The locale parameter indicates the locale to be used to convert to
    upper/lower case according to any locale-specific case mappings.
    If multiple locales are given in an array,
    the best available locale is used.

		Setting `locale: false` ignores the platform locale and uses the [Unicode Default Case Conversion](https://unicode-org.github.io/icu/userguide/transforms/casemappings.html#simple-single-character-case-mapping) algorithm.
		Default: The host environment’s current locale.

		@example
		```js
		camelCase('lorem-ipsum', {locale: 'en-US'});
		//=> 'loremIpsum'
		camelCase('lorem-ipsum', {locale: 'tr-TR'});
		//=> 'loremİpsum'
		camelCase('lorem-ipsum', {locale: ['en-US', 'en-GB']});
		//=> 'loremIpsum'
		camelCase('lorem-ipsum', {locale: ['tr', 'TR', 'tr-TR']});
		//=> 'loremİpsum'
		```
		*/
  readonly locale?: false | string | readonly string[];
}

/**
 * Convert a dash/dot/underscore/space separated string to camelCase
 * or PascalCase: `foo-bar` → `fooBar`.
 *
 * Correctly handles Unicode strings.
 *
 * @param input - String to convert to camel case.
 *
 * @example
 * ```javascript
 * camelCase('foo-bar');
 * //=> 'fooBar'
 * camelCase('foo_bar');
 * //=> 'fooBar'
 * camelCase('Foo-Bar');
 * //=> 'fooBar'
 * camelCase('розовый_пушистый_единорог');
 * //=> 'розовыйПушистыйЕдинорог'
 * camelCase('Foo-Bar', {pascalCase: true});
 * //=> 'FooBar'
 * camelCase('--foo.bar', {pascalCase: false});
 * //=> 'fooBar'
 * camelCase('Foo-BAR', {preserveConsecutiveUppercase: true});
 * //=> 'fooBAR'
 * camelCase('fooBAR', {pascalCase: true, preserveConsecutiveUppercase: true}));
 * //=> 'FooBAR'
 * camelCase('foo bar');
 * //=> 'fooBar'
 * camelCase(['foo', 'bar']);
 * //=> 'fooBar'
 * camelCase(['__foo__', '--bar'], {pascalCase: true});
 * //=> 'FooBar'
 * camelCase(['foo', 'BAR'], {pascalCase: true, preserveConsecutiveUppercase: true})
 * //=> 'FooBAR'
 * camelCase('lorem-ipsum', {locale: 'en-US'});
 * //=> 'loremIpsum'
 * ```
 */
export function camelCase(
  input: string | readonly string[],
  options?: CamelCaseOptions,
) {
  const isArray = Array.isArray(input);

  if (!(typeof input === "string" || isArray)) {
    throw new TypeError("Expected the input to be `string | string[]`");
  }

  const parsedOptions = {
    pascalCase: false,
    preserveConsecutiveUppercase: false,
    ...options,
  };

  if (isArray) {
    input = (input as string[])
      .map((x) => x.trim())
      .filter((x) => x.length)
      .join("-");
  } else {
    input = (input as string).trim();
  }

  if (input.length === 0) {
    return "";
  }

  const toLowerCase = !parsedOptions.locale
    ? (string: string) => string.toLowerCase()
    : (string: string) =>
      string.toLocaleLowerCase(parsedOptions.locale as string | string[]);

  const toUpperCase = !parsedOptions.locale
    ? (string: string) => string.toUpperCase()
    : (string: string) =>
      string.toLocaleUpperCase(parsedOptions.locale as string | string[]);

  if (input.length === 1) {
    return parsedOptions.pascalCase ? toUpperCase(input) : toLowerCase(input);
  }

  const inputLowerCased = toLowerCase(input);

  const hasUpperCase = input !== inputLowerCased;

  if (hasUpperCase) {
    input = preserveCamelCase(input, toLowerCase, toUpperCase);
  }

  input = input.replace(LEADING_SEPARATORS, "");

  if (parsedOptions.preserveConsecutiveUppercase) {
    input = preserveConsecutiveUppercase(input, toLowerCase);
  } else {
    input = toLowerCase(input);
  }

  if (parsedOptions.pascalCase) {
    input = toUpperCase(input.charAt(0)) + input.slice(1);
  }

  return postProcess(input, toUpperCase);
}

const UPPERCASE = /[\p{Lu}]/u;

const LOWERCASE = /[\p{Ll}]/u;

const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;

const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;

const SEPARATORS = /[_.\- ]+/;

const LEADING_SEPARATORS = new RegExp("^" + SEPARATORS.source);

const SEPARATORS_AND_IDENTIFIER = new RegExp(
  SEPARATORS.source + IDENTIFIER.source,
  "gu",
);

const NUMBERS_AND_IDENTIFIER = new RegExp("\\d+" + IDENTIFIER.source, "gu");

type modifyCase = (arg: string) => string;

const preserveCamelCase = (
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
      isLastCharUpper &&
      isLastLastCharUpper &&
      LOWERCASE.test(character)
    ) {
      string = string.slice(0, i - 1) + "-" + string.slice(i - 1);

      isLastLastCharUpper = isLastCharUpper;

      isLastCharUpper = false;

      isLastCharLower = true;
    } else {
      const lowerCasedCharacter = toLowerCase(character);
      const upperCasedCharacter = toUpperCase(character);

      isLastCharLower = lowerCasedCharacter === character &&
        upperCasedCharacter !== character;

      isLastLastCharUpper = isLastCharUpper;

      isLastCharUpper = upperCasedCharacter === character &&
        lowerCasedCharacter !== character;
    }
  }

  return string;
};

const preserveConsecutiveUppercase = (
  input: string,
  toLowerCase: modifyCase,
) => {
  LEADING_CAPITAL.lastIndex = 0;

  return input.replace(LEADING_CAPITAL, toLowerCase);
};

const postProcess = (input: string, toUpperCase: modifyCase) => {
  SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
  NUMBERS_AND_IDENTIFIER.lastIndex = 0;

  return input
    .replace(
      SEPARATORS_AND_IDENTIFIER,
      (_, identifier) => toUpperCase(identifier),
    )
    .replace(NUMBERS_AND_IDENTIFIER, toUpperCase);
};
