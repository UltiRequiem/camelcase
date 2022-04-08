import {
  LEADING_SEPARATORS,
  postProcess,
  preserveCamelCase,
  preserveConsecutiveUppercase,
} from "./mod_utils.ts";
import type { CamelCaseOptions } from "./mod_types.ts";

export function camelCase(
  input: string | string[],
  options?: CamelCaseOptions,
) {
  if (!(typeof input === "string" || Array.isArray(input))) {
    throw new TypeError("Expected the input to be `string | string[]`");
  }

  const parsedOptions = {
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
