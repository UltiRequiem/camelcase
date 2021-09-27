import camelcase, { camelCaseSync } from "./mod.js";

console.log(await camelcase("foo-bar-lol example_34 spaced word"));

console.log(camelCaseSync("Foo_bar"))
