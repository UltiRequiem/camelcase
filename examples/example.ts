import { camelCase } from "../src/index.js";

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
