# camelCase

[![Code Coverage](https://codecov.io/gh/ultirequiem/camelcase/branch/main/graph/badge.svg)](https://codecov.io/gh/ultirequiem/camelcase)
[![Deno Doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/camelcase/mod.ts)

Convert a dash/dot/underscore/space separated string to camelCase or PascalCase:
foo-bar → fooBar

Correctly handles Unicode strings.

If you use this on untrusted user input, don't forget to limit the length to
something reasonable.

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
import { timeZones } from "@ultirequiem/camelcase";
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

## Support

Open an Issue, I will check it a soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Consider [supporting me on Patreon](https://patreon.com/UltiRequiem) if you like
my work 🙏

Don't forget to start the repo ⭐

## Versioning

We use [Semantic Versioning](http://semver.org). For the versions available, see
the [tags](https://github.com/UltiRequiem/camelcase/tags) 🏷️

## Licence

Licensed under the MIT License 📄
