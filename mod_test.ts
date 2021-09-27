import { assertEquals } from "./test_deps.ts";
import camelCase, { camelCaseSync } from "./mod.ts";

Deno.test("camelCaseSync", async () => {
  assertEquals(await camelCase("foo"), "foo");
  assertEquals(await camelCase("foo-bar"), "fooBar");
  assertEquals(await camelCase("foo-bar-baz"), "fooBarBaz");
  assertEquals(await camelCase("foo--bar"), "fooBar");
  assertEquals(await camelCase("--foo-bar"), "fooBar");
  assertEquals(await camelCase("--foo--bar"), "fooBar");
  assertEquals(await camelCase("FOO-BAR"), "fooBar");
  assertEquals(await camelCase("FOÈ-BAR"), "foèBar");
  assertEquals(await camelCase("-foo-bar-"), "fooBar");
  assertEquals(await camelCase("--foo--bar--"), "fooBar");
  assertEquals(await camelCase("foo-1"), "foo1");
  assertEquals(await camelCase("foo.bar"), "fooBar");
  assertEquals(await camelCase("foo..bar"), "fooBar");
  assertEquals(await camelCase("..foo..bar.."), "fooBar");
  assertEquals(await camelCase("foo_bar"), "fooBar");
  assertEquals(await camelCase("__foo__bar__"), "fooBar");
  assertEquals(await camelCase("foo bar"), "fooBar");
  assertEquals(await camelCase("  foo  bar  "), "fooBar");
  assertEquals(await camelCase("-"), "-");
  assertEquals(await camelCase(" - "), "-");
  assertEquals(await camelCase("fooBar"), "fooBar");
  assertEquals(await camelCase("fooBar-baz"), "fooBarBaz");
  assertEquals(await camelCase("foìBar-baz"), "foìBarBaz");
  assertEquals(await camelCase("fooBarBaz-bazzy"), "fooBarBazBazzy");
  assertEquals(await camelCase("FBBazzy"), "fbBazzy");
  assertEquals(await camelCase("F"), "f");
  assertEquals(await camelCase("FooBar"), "fooBar");
  assertEquals(await camelCase("Foo"), "foo");
  assertEquals(await camelCase("FOO"), "foo");
  assertEquals(await camelCase(["foo", "bar"]), "fooBar");
  assertEquals(await camelCase(["foo", "-bar"]), "fooBar");
  assertEquals(await camelCase(["foo", "-bar", "baz"]), "fooBarBaz");
  assertEquals(await camelCase(["", ""]), "");
  assertEquals(await camelCase("--"), "");
  assertEquals(await camelCase(""), "");
  assertEquals(await camelCase("--__--_--_"), "");
  assertEquals(await camelCase(["---_", "--", "", "-_- "]), "");
  assertEquals(await camelCase("foo bar?"), "fooBar?");
  assertEquals(await camelCase("foo bar!"), "fooBar!");
  assertEquals(await camelCase("foo bar$"), "fooBar$");
  assertEquals(await camelCase("foo-bar#"), "fooBar#");
  assertEquals(await camelCase("XMLHttpRequest"), "xmlHttpRequest");
  assertEquals(await camelCase("AjaxXMLHttpRequest"), "ajaxXmlHttpRequest");
  assertEquals(
    await camelCase("Ajax-XMLHttpRequest"),
    "ajaxXmlHttpRequest",
  );
  assertEquals(await camelCase([]), "");
  assertEquals(await camelCase("mGridCol6@md"), "mGridCol6@md");
  assertEquals(await camelCase("A::a"), "a::a");
  assertEquals(await camelCase("Hello1World"), "hello1World");
  assertEquals(await camelCase("Hello11World"), "hello11World");
  assertEquals(await camelCase("hello1world"), "hello1World");
  assertEquals(await camelCase("Hello1World11foo"), "hello1World11Foo");
  assertEquals(await camelCase("Hello1"), "hello1");
  assertEquals(await camelCase("hello1"), "hello1");
  assertEquals(await camelCase("1Hello"), "1Hello");
  assertEquals(await camelCase("1hello"), "1Hello");
  assertEquals(await camelCase("h2w"), "h2W");
  assertEquals(
    await camelCase("розовый_пушистый-единороги"),
    "розовыйПушистыйЕдинороги",
  );
  assertEquals(
    await camelCase("розовый_пушистый-единороги"),
    "розовыйПушистыйЕдинороги",
  );
  assertEquals(
    await camelCase("РОЗОВЫЙ_ПУШИСТЫЙ-ЕДИНОРОГИ"),
    "розовыйПушистыйЕдинороги",
  );
  assertEquals(await camelCase("桑德在这里。"), "桑德在这里。");
  assertEquals(await camelCase("桑德在这里。"), "桑德在这里。");
  assertEquals(await camelCase("桑德_在这里。"), "桑德在这里。");
});

Deno.test("camelCaseSync with pascalCase option", () => {
  assertEquals(camelCaseSync("foo", { pascalCase: true }), "Foo");
  assertEquals(camelCaseSync("foo-bar", { pascalCase: true }), "FooBar");
  assertEquals(
    camelCaseSync("foo-bar-baz", { pascalCase: true }),
    "FooBarBaz",
  );
  assertEquals(camelCaseSync("foo--bar", { pascalCase: true }), "FooBar");
  assertEquals(camelCaseSync("--foo-bar", { pascalCase: true }), "FooBar");
  assertEquals(camelCaseSync("--foo--bar", { pascalCase: true }), "FooBar");
  assertEquals(camelCaseSync("FOO-BAR", { pascalCase: true }), "FooBar");
  assertEquals(camelCaseSync("FOÈ-BAR", { pascalCase: true }), "FoèBar");
  assertEquals(camelCaseSync("-foo-bar-", { pascalCase: true }), "FooBar");
  assertEquals(
    camelCaseSync("--foo--bar--", { pascalCase: true }),
    "FooBar",
  );
  assertEquals(camelCaseSync("foo-1", { pascalCase: true }), "Foo1");
  assertEquals(camelCaseSync("foo.bar", { pascalCase: true }), "FooBar");
  assertEquals(camelCaseSync("foo..bar", { pascalCase: true }), "FooBar");
  assertEquals(
    camelCaseSync("..foo..bar..", { pascalCase: true }),
    "FooBar",
  );
  assertEquals(camelCaseSync("foo_bar", { pascalCase: true }), "FooBar");
  assertEquals(
    camelCaseSync("__foo__bar__", { pascalCase: true }),
    "FooBar",
  );
  assertEquals(
    camelCaseSync("__foo__bar__", { pascalCase: true }),
    "FooBar",
  );
  assertEquals(camelCaseSync("foo bar", { pascalCase: true }), "FooBar");
  assertEquals(
    camelCaseSync("  foo  bar  ", { pascalCase: true }),
    "FooBar",
  );
  assertEquals(camelCaseSync("-", { pascalCase: true }), "-");
  assertEquals(camelCaseSync(" - ", { pascalCase: true }), "-");
  assertEquals(camelCaseSync("fooBar", { pascalCase: true }), "FooBar");
  assertEquals(
    camelCaseSync("fooBar-baz", { pascalCase: true }),
    "FooBarBaz",
  );
  assertEquals(
    camelCaseSync("foìBar-baz", { pascalCase: true }),
    "FoìBarBaz",
  );
  assertEquals(
    camelCaseSync("fooBarBaz-bazzy", { pascalCase: true }),
    "FooBarBazBazzy",
  );
  assertEquals(camelCaseSync("FBBazzy", { pascalCase: true }), "FbBazzy");
  assertEquals(camelCaseSync("F", { pascalCase: true }), "F");
  assertEquals(camelCaseSync("FooBar", { pascalCase: true }), "FooBar");
  assertEquals(camelCaseSync("Foo", { pascalCase: true }), "Foo");
  assertEquals(camelCaseSync("FOO", { pascalCase: true }), "Foo");
  assertEquals(camelCaseSync(["foo", "bar"], { pascalCase: true }), "FooBar");
  assertEquals(camelCaseSync(["foo", "-bar"], { pascalCase: true }), "FooBar");
  assertEquals(
    camelCaseSync(["foo", "-bar", "baz"], { pascalCase: true }),
    "FooBarBaz",
  );
  assertEquals(camelCaseSync(["", ""], { pascalCase: true }), "");
  assertEquals(camelCaseSync("--", { pascalCase: true }), "");
  assertEquals(camelCaseSync("", { pascalCase: true }), "");
  assertEquals(camelCaseSync("--__--_--_", { pascalCase: true }), "");
  assertEquals(
    camelCaseSync(["---_", "--", "", "-_- "], { pascalCase: true }),
    "",
  );
  assertEquals(camelCaseSync("foo bar?", { pascalCase: true }), "FooBar?");
  assertEquals(camelCaseSync("foo bar!", { pascalCase: true }), "FooBar!");
  assertEquals(camelCaseSync("foo bar$", { pascalCase: true }), "FooBar$");
  assertEquals(camelCaseSync("foo-bar#", { pascalCase: true }), "FooBar#");
  assertEquals(
    camelCaseSync("XMLHttpRequest", { pascalCase: true }),
    "XmlHttpRequest",
  );
  assertEquals(
    camelCaseSync("AjaxXMLHttpRequest", { pascalCase: true }),
    "AjaxXmlHttpRequest",
  );
  assertEquals(
    camelCaseSync("Ajax-XMLHttpRequest", { pascalCase: true }),
    "AjaxXmlHttpRequest",
  );
  assertEquals(camelCaseSync([], { pascalCase: true }), "");
  assertEquals(
    camelCaseSync("mGridCol6@md", { pascalCase: true }),
    "MGridCol6@md",
  );
  assertEquals(camelCaseSync("A::a", { pascalCase: true }), "A::a");
  assertEquals(
    camelCaseSync("Hello1World", { pascalCase: true }),
    "Hello1World",
  );
  assertEquals(
    camelCaseSync("Hello11World", { pascalCase: true }),
    "Hello11World",
  );
  assertEquals(
    camelCaseSync("hello1world", { pascalCase: true }),
    "Hello1World",
  );
  assertEquals(
    camelCaseSync("hello1World", { pascalCase: true }),
    "Hello1World",
  );
  assertEquals(camelCaseSync("hello1", { pascalCase: true }), "Hello1");
  assertEquals(camelCaseSync("Hello1", { pascalCase: true }), "Hello1");
  assertEquals(camelCaseSync("1hello", { pascalCase: true }), "1Hello");
  assertEquals(camelCaseSync("1Hello", { pascalCase: true }), "1Hello");
  assertEquals(camelCaseSync("h1W", { pascalCase: true }), "H1W");
  assertEquals(
    camelCaseSync("РозовыйПушистыйЕдинороги", { pascalCase: true }),
    "РозовыйПушистыйЕдинороги",
  );
  assertEquals(
    camelCaseSync("розовый_пушистый-единороги", { pascalCase: true }),
    "РозовыйПушистыйЕдинороги",
  );
  assertEquals(
    camelCaseSync("РОЗОВЫЙ_ПУШИСТЫЙ-ЕДИНОРОГИ", { pascalCase: true }),
    "РозовыйПушистыйЕдинороги",
  );
  assertEquals(camelCaseSync("桑德在这里。", { pascalCase: true }), "桑德在这里。");
  assertEquals(camelCaseSync("桑德_在这里。", { pascalCase: true }), "桑德在这里。");
});

Deno.test("Test camelCaseSync with preserveConsecutiveUppercase option", () => {
  assertEquals(
    camelCaseSync("foo-BAR", { preserveConsecutiveUppercase: true }),
    "fooBAR",
  );
  assertEquals(
    camelCaseSync("Foo-BAR", { preserveConsecutiveUppercase: true }),
    "fooBAR",
  );
  assertEquals(
    camelCaseSync("fooBAR", { preserveConsecutiveUppercase: true }),
    "fooBAR",
  );
  assertEquals(
    camelCaseSync("fooBaR", { preserveConsecutiveUppercase: true }),
    "fooBaR",
  );
  assertEquals(
    camelCaseSync("FOÈ-BAR", { preserveConsecutiveUppercase: true }),
    "FOÈBAR",
  );
  assertEquals(
    camelCaseSync(["foo", "BAR"], { preserveConsecutiveUppercase: true }),
    "fooBAR",
  );
  assertEquals(
    camelCaseSync(["foo", "-BAR"], { preserveConsecutiveUppercase: true }),
    "fooBAR",
  );
  assertEquals(
    camelCaseSync(["foo", "-BAR", "baz"], {
      preserveConsecutiveUppercase: true,
    }),
    "fooBARBaz",
  );
  assertEquals(
    camelCaseSync(["", ""], { preserveConsecutiveUppercase: true }),
    "",
  );
  assertEquals(camelCaseSync("--", { preserveConsecutiveUppercase: true }), "");
  assertEquals(camelCaseSync("", { preserveConsecutiveUppercase: true }), "");
  assertEquals(
    camelCaseSync("--__--_--_", { preserveConsecutiveUppercase: true }),
    "",
  );
  assertEquals(
    camelCaseSync(["---_", "--", "", "-_- "], {
      preserveConsecutiveUppercase: true,
    }),
    "",
  );
  assertEquals(
    camelCaseSync("foo BAR?", { preserveConsecutiveUppercase: true }),
    "fooBAR?",
  );
  assertEquals(
    camelCaseSync("foo BAR!", { preserveConsecutiveUppercase: true }),
    "fooBAR!",
  );
  assertEquals(
    camelCaseSync("foo BAR$", { preserveConsecutiveUppercase: true }),
    "fooBAR$",
  );
  assertEquals(
    camelCaseSync("foo-BAR#", { preserveConsecutiveUppercase: true }),
    "fooBAR#",
  );
  assertEquals(
    camelCaseSync("XMLHttpRequest", { preserveConsecutiveUppercase: true }),
    "XMLHttpRequest",
  );
  assertEquals(
    camelCaseSync("AjaxXMLHttpRequest", { preserveConsecutiveUppercase: true }),
    "ajaxXMLHttpRequest",
  );
  assertEquals(
    camelCaseSync("Ajax-XMLHttpRequest", {
      preserveConsecutiveUppercase: true,
    }),
    "ajaxXMLHttpRequest",
  );
  assertEquals(camelCaseSync([], { preserveConsecutiveUppercase: true }), "");
  assertEquals(
    camelCaseSync("mGridCOl6@md", { preserveConsecutiveUppercase: true }),
    "mGridCOl6@md",
  );
  assertEquals(
    camelCaseSync("A::a", { preserveConsecutiveUppercase: true }),
    "a::a",
  );
  assertEquals(
    camelCaseSync("Hello1WORLD", { preserveConsecutiveUppercase: true }),
    "hello1WORLD",
  );
  assertEquals(
    camelCaseSync("Hello11WORLD", { preserveConsecutiveUppercase: true }),
    "hello11WORLD",
  );
  assertEquals(
    camelCaseSync("РозовыйПушистыйFOOдинорогиf", {
      preserveConsecutiveUppercase: true,
    }),
    "розовыйПушистыйFOOдинорогиf",
  );
  assertEquals(
    camelCaseSync("桑德在这里。", { preserveConsecutiveUppercase: true }),
    "桑德在这里。",
  );
  assertEquals(
    camelCaseSync("桑德_在这里。", { preserveConsecutiveUppercase: true }),
    "桑德在这里。",
  );
});

Deno.test("Test camelCaseSync with both pascalCase and preserveConsecutiveUppercase option", () => {
  assertEquals(
    camelCaseSync("foo-BAR", {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "FooBAR",
  );
  assertEquals(
    camelCaseSync("fooBAR", {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "FooBAR",
  );
  assertEquals(
    camelCaseSync("fooBaR", {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "FooBaR",
  );
  assertEquals(
    camelCaseSync("fOÈ-BAR", {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "FOÈBAR",
  );
  assertEquals(
    camelCaseSync("--foo.BAR", {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "FooBAR",
  );
  assertEquals(
    camelCaseSync(["Foo", "BAR"], {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "FooBAR",
  );
  assertEquals(
    camelCaseSync(["foo", "-BAR"], {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "FooBAR",
  );
  assertEquals(
    camelCaseSync(["foo", "-BAR", "baz"], {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "FooBARBaz",
  );
  assertEquals(
    camelCaseSync(["", ""], {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "",
  );
  assertEquals(
    camelCaseSync("--", {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "",
  );
  assertEquals(
    camelCaseSync("", { pascalCase: true, preserveConsecutiveUppercase: true }),
    "",
  );
  assertEquals(
    camelCaseSync("--__--_--_", {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "",
  );
  assertEquals(
    camelCaseSync(["---_", "--", "", "-_- "], {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "",
  );
  assertEquals(
    camelCaseSync("foo BAR?", {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "FooBAR?",
  );
  assertEquals(
    camelCaseSync("foo BAR!", {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "FooBAR!",
  );
  assertEquals(
    camelCaseSync("Foo BAR$", {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "FooBAR$",
  );
  assertEquals(
    camelCaseSync("foo-BAR#", {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "FooBAR#",
  );
  assertEquals(
    camelCaseSync("xMLHttpRequest", {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "XMLHttpRequest",
  );
  assertEquals(
    camelCaseSync("ajaxXMLHttpRequest", {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "AjaxXMLHttpRequest",
  );
  assertEquals(
    camelCaseSync("Ajax-XMLHttpRequest", {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "AjaxXMLHttpRequest",
  );
  assertEquals(
    camelCaseSync([], { pascalCase: true, preserveConsecutiveUppercase: true }),
    "",
  );
  assertEquals(
    camelCaseSync("mGridCOl6@md", {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "MGridCOl6@md",
  );
  assertEquals(
    camelCaseSync("A::a", {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "A::a",
  );
  assertEquals(
    camelCaseSync("Hello1WORLD", {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "Hello1WORLD",
  );
  assertEquals(
    camelCaseSync("Hello11WORLD", {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "Hello11WORLD",
  );
  assertEquals(
    camelCaseSync("pозовыйПушистыйFOOдинорогиf", {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "PозовыйПушистыйFOOдинорогиf",
  );
  assertEquals(
    camelCaseSync("桑德在这里。", {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "桑德在这里。",
  );
  assertEquals(
    camelCaseSync("桑德_在这里。", {
      pascalCase: true,
      preserveConsecutiveUppercase: true,
    }),
    "桑德在这里。",
  );
});

Deno.test("Test camelCaseSync with locale option", () => {
  assertEquals(camelCaseSync("lorem-ipsum", { locale: "tr-TR" }), "loremİpsum");
  assertEquals(camelCaseSync("lorem-ipsum", { locale: "en-EN" }), "loremIpsum");
  assertEquals(
    camelCaseSync("lorem-ipsum", { locale: ["tr", "TR", "tr-TR"] }),
    "loremİpsum",
  );
  assertEquals(
    camelCaseSync("lorem-ipsum", { locale: ["en-EN", "en-GB"] }),
    "loremIpsum",
  );
  assertEquals(
    camelCaseSync("ipsum-dolor", { pascalCase: true, locale: "tr-TR" }),
    "İpsumDolor",
  );
  assertEquals(
    camelCaseSync("ipsum-dolor", { pascalCase: true, locale: "en-EN" }),
    "IpsumDolor",
  );
  assertEquals(
    camelCaseSync("ipsum-dolor", {
      pascalCase: true,
      locale: ["tr", "TR", "tr-TR"],
    }),
    "İpsumDolor",
  );
  assertEquals(
    camelCaseSync("ipsum-dolor", {
      pascalCase: true,
      locale: ["en-EN", "en-GB"],
    }),
    "IpsumDolor",
  );
});
