interface Options {
  readonly pascalCase?: boolean;
  readonly preserveConsecutiveUppercase?: boolean;
  readonly locale?: string | string[];
}

function preserveCamelCase(string: string, locale: string) {
  let isLastCharLower = false;
  let isLastCharUpper = false;
  let isLastLastCharUpper = false;

  for (let i = 0; i < string.length; i++) {
    const character = string[i];

    if (isLastCharLower && /[\p{Lu}]/u.test(character)) {
      string = string.slice(0, i) + "-" + string.slice(i);
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      i++;
    } else if (
      isLastCharUpper && isLastLastCharUpper && /[\p{Ll}]/u.test(character)
    ) {
      string = string.slice(0, i - 1) + "-" + string.slice(i - 1);
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower = character.toLocaleLowerCase(locale) === character &&
        character.toLocaleUpperCase(locale) !== character;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = character.toLocaleUpperCase(locale) === character &&
        character.toLocaleLowerCase(locale) !== character;
    }
  }

  return string;
}

function preserveConsecutiveUppercase(input: string) {
  return input.replace(/^[\p{Lu}](?![\p{Lu}])/gu, (m1) => m1.toLowerCase());
}

function postProcess(input: string, options: Options) {
  return input.replace(
    /[_.\- ]+([\p{Alpha}\p{N}_]|$)/gu,
    (_, p1) => p1.toLocaleUpperCase(options.locale),
  )
    .replace(
      /\d+([\p{Alpha}\p{N}_]|$)/gu,
      (m) => m.toLocaleUpperCase(options.locale),
    );
}

export function camelCaseSync(input: string | string[], options?: Options) {
  if (!(typeof input === "string" || Array.isArray(input))) {
    throw new TypeError("Expected the input to be `string | string[]`");
  }

  options = {
    pascalCase: false,
    preserveConsecutiveUppercase: false,
    ...options,
  };

  if (Array.isArray(input)) {
    input = input.map((x) => x.trim())
      .filter((x) => x.length)
      .join("-");
  } else {
    input = input.trim();
  }

  if (input.length === 0) {
    return "";
  }

  if (input.length === 1) {
    return options.pascalCase
      ? input.toLocaleUpperCase(options.locale)
      : input.toLocaleLowerCase(options.locale);
  }

  const hasUpperCase = input !== input.toLocaleLowerCase(options.locale);

  if (hasUpperCase) {
    input = preserveCamelCase(input, options.locale as string);
  }

  input = input.replace(/^[_.\- ]+/, "");

  if (options.preserveConsecutiveUppercase) {
    input = preserveConsecutiveUppercase(input);
  } else {
    input = input.toLocaleLowerCase();
  }

  if (options.pascalCase) {
    input = input.charAt(0).toLocaleUpperCase(options.locale) + input.slice(1);
  }

  return postProcess(input, options);
}

export default function camelcase(
  input: string | string[],
  options?: Options,
): Promise<string> {
  return Promise.resolve(camelCaseSync(input, options));
}
