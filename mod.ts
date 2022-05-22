import {
  LEADING_SEPARATORS,
  postProcess,
  preserveCamelCase,
  preserveConsecutiveUppercase,
} from "./mod_utils.ts";
import type { CamelCaseOptions } from "./mod_types.ts";

/**
Convert a dash/dot/underscore/space separated string to camelCase
or PascalCase: `foo-bar` → `fooBar`.
Correctly handles Unicode strings.

@param input - String to convert to camel case.

@example
```js
camelCase('foo-bar');
//=> 'fooBar'
camelCase('foo_bar');
//=> 'fooBar'
camelCase('Foo-Bar');
//=> 'fooBar'
camelCase('розовый_пушистый_единорог');
//=> 'розовыйПушистыйЕдинорог'
camelCase('Foo-Bar', {pascalCase: true});
//=> 'FooBar'
camelCase('--foo.bar', {pascalCase: false});
//=> 'fooBar'
camelCase('Foo-BAR', {preserveConsecutiveUppercase: true});
//=> 'fooBAR'
camelCase('fooBAR', {pascalCase: true, preserveConsecutiveUppercase: true}));
//=> 'FooBAR'
camelCase('foo bar');
//=> 'fooBar'
camelCase(['foo', 'bar']);
//=> 'fooBar'
camelCase(['__foo__', '--bar'], {pascalCase: true});
//=> 'FooBar'
camelCase(['foo', 'BAR'], {pascalCase: true, preserveConsecutiveUppercase: true})
//=> 'FooBAR'
camelCase('lorem-ipsum', {locale: 'en-US'});
//=> 'loremIpsum'
```
*/
export function camelCase(
  input: string | string[],
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

  const toLowerCase = parsedOptions.locale === false
    ? (string: string) => string.toLowerCase()
    : (string: string) =>
      string.toLocaleLowerCase(parsedOptions.locale as string | string[]);

  const toUpperCase = parsedOptions.locale === false
    ? (string: string) => string.toUpperCase()
    : (string: string) =>
      string.toLocaleUpperCase(parsedOptions.locale as string | string[]);

  if (input.length === 1) {
    return parsedOptions.pascalCase ? toUpperCase(input) : toLowerCase(input);
  }

  const hasUpperCase = input !== toLowerCase(input);

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

export type { CamelCaseOptions };