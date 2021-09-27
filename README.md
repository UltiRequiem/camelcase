# camelCase

[![GitMoji](https://img.shields.io/badge/Gitmoji-%F0%9F%8E%A8%20-FFDD67.svg)](https://gitmoji.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Lines Of Code](https://img.shields.io/tokei/lines/github.com/UltiRequiem/deno-camelcase?color=blue&label=Total%20Lines)
![CodeQL](https://github.com/UltiRequiem/deno-camelcase/workflows/CodeQL/badge.svg)
![CodeQL](https://github.com/UltiRequiem/deno-camelcase/workflows/Lint/badge.svg)

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

See [example.ts](./example.ts) and [mod_test.ts](./mod_test.ts) for more examples usage.

### License

[This project](https://deno.land/x/camelcase) is licensed under the
[MIT License](./LICENSE.md).
