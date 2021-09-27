# camelCase

[![GitMoji](https://img.shields.io/badge/Gitmoji-%F0%9F%8E%A8%20-FFDD67.svg)](https://gitmoji.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Lines Of Code](https://img.shields.io/tokei/lines/github.com/UltiRequiem/deno-camelcase?color=blue&label=Total%20Lines)
![CodeQL](https://github.com/UltiRequiem/deno-camelcase/workflows/CodeQL/badge.svg)

> Convert a dash/dot/underscore/space separated string to camelCase or PascalCase: foo-bar → fooBar

Correctly handles Unicode strings.

You can get this package by [nest.land](https://nest.land/package/camelcase),
[deno.land](https://deno.land/x/camelcase) or [denopkg](https://denopkg.com/UltiRequiem/deno-camelcase/mod.js).

## Usage

This package exposes two Functions,
[camelCase](https://github.com/UltiRequiem/deno-camelcase/blob/main/mod.js#L99) and
[camelCaseSync](https://github.com/UltiRequiem/deno-camelcase/blob/main/mod.js#L49).

```typescript
import camelcase, { camelCaseSync } from "https://deno.land/x/camelcase/mod.js";

console.log(await camelcase("foo-bar-lol example_34 spaced word"));

console.log(camelCaseSync("Foo_bar"));
```

### License

[This project](https://deno.land/x/template) is licensed under the
[MIT License](./LICENSE.md).
