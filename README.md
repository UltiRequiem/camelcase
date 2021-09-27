# camelCase

[![GitMoji](https://img.shields.io/badge/Gitmoji-%F0%9F%8E%A8%20-FFDD67.svg)](https://gitmoji.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Lines Of Code](https://img.shields.io/tokei/lines/github.com/UltiRequiem/deno-camelcase?color=blue&label=Total%20Lines)
![CodeQL](https://github.com/UltiRequiem/deno-camelcase/workflows/CodeQL/badge.svg)
![Lint](https://github.com/UltiRequiem/deno-camelcase/workflows/Lint/badge.svg)
![Test](https://github.com/UltiRequiem/deno-camelcase/workflows/Test/badge.svg)

> Convert a dash/dot/underscore/space separated string to camelCase or PascalCase: foo-bar → fooBar

Correctly handles Unicode strings.

You can get this package by [nest.land](https://nest.land/package/camelcase),
[deno.land](https://deno.land/x/camelcase) or [denopkg](https://denopkg.com/UltiRequiem/deno-camelcase/mod.ts).

## Usage

This package exposes two Functions,
[camelCase](https://github.com/UltiRequiem/deno-camelcase/blob/main/mod.ts#L101) and
[camelCaseSync](https://github.com/UltiRequiem/deno-camelcase/blob/main/mod.ts#L55).

```typescript
import camelcase, { camelCaseSync } from "https://deno.land/x/camelcase/mod.ts";

console.log(await camelcase("foo-bar-lol example_34 spaced word"));

console.log(camelCaseSync("Foo_bar"));
```

See [example.ts](./example.ts) and [mod_test.ts](./mod_test.ts) for more usage examples.

## API

### camelCase(input, options?)

#### input

Type: `string | string[]`

String to convert to camel case.

#### options

Type: `object`

##### pascalCase

Type: `boolean`\
Default: `false`

Uppercase the first character: `foo-bar` → `FooBar`

##### preserveConsecutiveUppercase

Type: `boolean`\
Default: `false`

Preserve the consecutive uppercase characters: `foo-BAR` → `FooBAR`.

##### locale

Type: `string | string[]`\
Default: The host environment’s current locale.

The locale parameter indicates the locale to be used to convert to upper/lower case according to any locale-specific case mappings. If multiple locales are given in an array, the best available locale is used.

```js
const camelCase = require("camelcase");

camelCase("lorem-ipsum", { locale: "en-US" });
//=> 'loremIpsum'

camelCase("lorem-ipsum", { locale: "tr-TR" });
//=> 'loremİpsum'

camelCase("lorem-ipsum", { locale: ["en-US", "en-GB"] });
//=> 'loremIpsum'

camelCase("lorem-ipsum", { locale: ["tr", "TR", "tr-TR"] });
//=> 'loremİpsum'
```

### License

[This project](https://deno.land/x/camelcase) is licensed under the
[MIT License](./LICENSE.md).
