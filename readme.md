# Camel case

[![Code Coverage](https://codecov.io/gh/ultirequiem/camelcase/branch/main/graph/badge.svg)](https://codecov.io/gh/ultirequiem/camelcase)
[![Deno Doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/camelcase/mod.ts)

Convert a dash/dot/underscore/space separated string to
[**camelCase**](https://wikipedia.org/wiki/Camel_case) or
[**PascalCase**](https://wiktionary.org/wiki/Pascal_case).

**Correctly handles unicode strings.**

If you use this on untrusted user input, don't forget to limit the length to
something reasonable.

> Based on the
> [Sindre Sorhus Camelcase Module](https://github.com/sindresorhus/camelcase),
> they have the same test suite and API, but this version is more than 3 times
> faster, see the benchmarks below!

## Usage

The API is the same on all this platforms ✔️

### [Deno 🦕](https://deno.land/x/camelcase)

```javascript
import { camelcase } from "https://deno.land/x/camelcase/mod.ts";

camelCase("foo-bar"); //=> 'fooBar'

camelCase("foo_bar"); //=> 'fooBar'

camelCase("Foo-Bar"); //=> 'fooBar'

camelCase("розовый_пушистый_единорог"); //=> 'розовыйПушистыйЕдинорог'

camelCase("Foo-Bar", { pascalCase: true }); //=> 'FooBar'

camelCase("--foo.bar", { pascalCase: false }); //=> 'fooBar'

camelCase("Foo-BAR", { preserveConsecutiveUppercase: true }); //=> 'fooBAR'

camelCase("fooBAR", { pascalCase: true, preserveConsecutiveUppercase: true }); //=> 'FooBAR'

camelCase("foo bar"); //=> 'fooBar'

camelCase(["foo", "bar"]); //=> 'fooBar'

camelCase(["__foo__", "--bar"], { pascalCase: true }); //=> 'FooBar'

camelCase(["foo", "BAR"], {
  pascalCase: true,
  preserveConsecutiveUppercase: true,
}); //=> 'FooBAR'

camelCase("lorem-ipsum", { locale: "en-US" }); //=> 'loremIpsum'
```

### [Node.js 🐢🚀](https://npmjs.com/package/@ultirequiem/camelcase)

```javascript
import { camelCase } from "@ultirequiem/camelcase";
```

### [Browser 🌐](https://developer.mozilla.org/en-US/docs/Glossary/Browser)

You can use any [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) 🔥

Eg 👉
[ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) ↔️
[SkyPack](https://cdn.skypack.dev/@ultirequiem/camelcase) 🆚
[Script Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
↔️ [JSDelivr](https://cdn.jsdelivr.net/npm/@ultirequiem/camelcase)

## Documentation

Is hosted on
[Deno Doc](https://doc.deno.land/https://deno.land/x/camelcase/mod.ts) 📄

## Benchmarks

Check the benchmark code on `bench.ts` ⚡

> [Using Deno's built-in benchmark runner](https://deno.land/manual/tools/benchmarker)

```
benchmark                 time (avg)             (min … max)       p75       p99      p995
------------------------------------------------------------ -----------------------------
Sindre Sorhus Module  257.01 µs/iter   (237.4 µs … 382.3 µs)  252.9 µs  331.5 µs  339.9 µs
This Module               78 µs/iter    (67.6 µs … 214.9 µs)   78.1 µs  152.6 µs  155.1 µs

summary
  This Module
   3.29x times faster than Sindre Sorhus Module
```

> Version 2.1.0

Benchmarks are run on GitHub Actions on each commit, you can see the latest runs
[here](https://github.com/UltiRequiem/camelcase/actions/workflows/benchmark.yaml).

## Support

Open an Issue, I will check it a soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Consider [supporting me on Patreon](https://patreon.com/UltiRequiem) if you like
my work 🙏

Don't forget to start the repo ⭐

## Authors

[Eliaz Bobadilla](https://ultirequiem.com) - Creator and Maintainer 💪

See also the full list of
[contributors](https://github.com/UltiRequiem/camelcase/contributors) who
participated in this project ✨

## Versioning

We use [Semantic Versioning](http://semver.org). For the versions available, see
the [tags](https://github.com/UltiRequiem/camelcase/tags) 🏷️

## Licence

Licensed under the MIT License 📄
