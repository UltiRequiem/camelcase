import camelcase, { camelCaseSync } from "./mod.ts";

console.log(await camelcase("foo-bar-lol example_34 spaced word")); // fooBarLolExample34SpacedWord

console.log(camelCaseSync("Foo_bar")); // fooBar
