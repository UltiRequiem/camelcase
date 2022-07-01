import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.146.0/testing/asserts.ts";
import { camelCase } from "./mod.ts";

Deno.test("camelCase", () => {
  assertEquals(camelCase("foo"), "foo");
  assertEquals(camelCase("foo-bar"), "fooBar");
  assertEquals(camelCase("foo-bar-baz"), "fooBarBaz");
  assertEquals(camelCase("foo--bar"), "fooBar");
  assertEquals(camelCase("--foo-bar"), "fooBar");
  assertEquals(camelCase("--foo--bar"), "fooBar");
  assertEquals(camelCase("FOO-BAR"), "fooBar");
  assertEquals(camelCase("FOÈ-BAR"), "foèBar");
  assertEquals(camelCase("-foo-bar-"), "fooBar");
  assertEquals(camelCase("--foo--bar--"), "fooBar");
  assertEquals(camelCase("foo-1"), "foo1");
  assertEquals(camelCase("foo.bar"), "fooBar");
  assertEquals(camelCase("foo..bar"), "fooBar");
  assertEquals(camelCase("..foo..bar.."), "fooBar");
  assertEquals(camelCase("foo_bar"), "fooBar");
  assertEquals(camelCase("__foo__bar__"), "fooBar");
  assertEquals(camelCase("foo bar"), "fooBar");
  assertEquals(camelCase("  foo  bar  "), "fooBar");
  assertEquals(camelCase("-"), "-");
  assertEquals(camelCase(" - "), "-");
  assertEquals(camelCase("fooBar"), "fooBar");
  assertEquals(camelCase("fooBar-baz"), "fooBarBaz");
  assertEquals(camelCase("foìBar-baz"), "foìBarBaz");
  assertEquals(camelCase("fooBarBaz-bazzy"), "fooBarBazBazzy");
  assertEquals(camelCase("FBBazzy"), "fbBazzy");
  assertEquals(camelCase("F"), "f");
  assertEquals(camelCase("FooBar"), "fooBar");
  assertEquals(camelCase("Foo"), "foo");
  assertEquals(camelCase("FOO"), "foo");
  assertEquals(camelCase(["foo", "bar"]), "fooBar");
  assertEquals(camelCase(["foo", "-bar"]), "fooBar");
  assertEquals(camelCase(["foo", "-bar", "baz"]), "fooBarBaz");
  assertEquals(camelCase(["", ""]), "");
  assertEquals(camelCase("--"), "");
  assertEquals(camelCase(""), "");
  assertEquals(camelCase("--__--_--_"), "");
  assertEquals(camelCase(["---_", "--", "", "-_- "]), "");
  assertEquals(camelCase("foo bar?"), "fooBar?");
  assertEquals(camelCase("foo bar!"), "fooBar!");
  assertEquals(camelCase("foo bar$"), "fooBar$");
  assertEquals(camelCase("foo-bar#"), "fooBar#");
  assertEquals(camelCase("XMLHttpRequest"), "xmlHttpRequest");
  assertEquals(camelCase("AjaxXMLHttpRequest"), "ajaxXmlHttpRequest");
  assertEquals(camelCase("Ajax-XMLHttpRequest"), "ajaxXmlHttpRequest");
  assertEquals(camelCase([]), "");
  assertEquals(camelCase("mGridCol6@md"), "mGridCol6@md");
  assertEquals(camelCase("A::a"), "a::a");
  assertEquals(camelCase("Hello1World"), "hello1World");
  assertEquals(camelCase("Hello11World"), "hello11World");
  assertEquals(camelCase("hello1world"), "hello1World");
  assertEquals(camelCase("Hello1World11foo"), "hello1World11Foo");
  assertEquals(camelCase("Hello1"), "hello1");
  assertEquals(camelCase("hello1"), "hello1");
  assertEquals(camelCase("1Hello"), "1Hello");
  assertEquals(camelCase("1hello"), "1Hello");
  assertEquals(camelCase("h2w"), "h2W");
  assertEquals(
    camelCase("розовый_пушистый-единороги"),
    "розовыйПушистыйЕдинороги",
  );
  assertEquals(
    camelCase("розовый_пушистый-единороги"),
    "розовыйПушистыйЕдинороги",
  );
  assertEquals(
    camelCase("РОЗОВЫЙ_ПУШИСТЫЙ-ЕДИНОРОГИ"),
    "розовыйПушистыйЕдинороги",
  );
  assertEquals(camelCase("桑德在这里。"), "桑德在这里。");
  assertEquals(camelCase("桑德在这里。"), "桑德在这里。");
  assertEquals(camelCase("桑德_在这里。"), "桑德在这里。");
});

Deno.test("camelCase with pascalCase option", () => {
  assertEquals(camelCase("foo", { pascalCase: true }), "Foo");
  assertEquals(camelCase("foo-bar", { pascalCase: true }), "FooBar");
  assertEquals(camelCase("foo-bar-baz", { pascalCase: true }), "FooBarBaz");
  assertEquals(camelCase("foo--bar", { pascalCase: true }), "FooBar");
  assertEquals(camelCase("--foo-bar", { pascalCase: true }), "FooBar");
  assertEquals(camelCase("--foo--bar", { pascalCase: true }), "FooBar");
  assertEquals(camelCase("FOO-BAR", { pascalCase: true }), "FooBar");
  assertEquals(camelCase("FOÈ-BAR", { pascalCase: true }), "FoèBar");
  assertEquals(camelCase("-foo-bar-", { pascalCase: true }), "FooBar");
  assertEquals(camelCase("--foo--bar--", { pascalCase: true }), "FooBar");
  assertEquals(camelCase("foo-1", { pascalCase: true }), "Foo1");
  assertEquals(camelCase("foo.bar", { pascalCase: true }), "FooBar");
  assertEquals(camelCase("foo..bar", { pascalCase: true }), "FooBar");
  assertEquals(camelCase("..foo..bar..", { pascalCase: true }), "FooBar");
  assertEquals(camelCase("foo_bar", { pascalCase: true }), "FooBar");
  assertEquals(camelCase("__foo__bar__", { pascalCase: true }), "FooBar");
  assertEquals(camelCase("__foo__bar__", { pascalCase: true }), "FooBar");
  assertEquals(camelCase("foo bar", { pascalCase: true }), "FooBar");
  assertEquals(camelCase("  foo  bar  ", { pascalCase: true }), "FooBar");
  assertEquals(camelCase("-", { pascalCase: true }), "-");
  assertEquals(camelCase(" - ", { pascalCase: true }), "-");
  assertEquals(camelCase("fooBar", { pascalCase: true }), "FooBar");
  assertEquals(camelCase("fooBar-baz", { pascalCase: true }), "FooBarBaz");
  assertEquals(camelCase("foìBar-baz", { pascalCase: true }), "FoìBarBaz");
  assertEquals(
    camelCase("fooBarBaz-bazzy", { pascalCase: true }),
    "FooBarBazBazzy",
  );
  assertEquals(camelCase("FBBazzy", { pascalCase: true }), "FbBazzy");
  assertEquals(camelCase("F", { pascalCase: true }), "F");
  assertEquals(camelCase("FooBar", { pascalCase: true }), "FooBar");
  assertEquals(camelCase("Foo", { pascalCase: true }), "Foo");
  assertEquals(camelCase("FOO", { pascalCase: true }), "Foo");
  assertEquals(camelCase(["foo", "bar"], { pascalCase: true }), "FooBar");
  assertEquals(camelCase(["foo", "-bar"], { pascalCase: true }), "FooBar");
  assertEquals(
    camelCase(["foo", "-bar", "baz"], { pascalCase: true }),
    "FooBarBaz",
  );
  assertEquals(camelCase(["", ""], { pascalCase: true }), "");
  assertEquals(camelCase("--", { pascalCase: true }), "");
  assertEquals(camelCase("", { pascalCase: true }), "");
  assertEquals(camelCase("--__--_--_", { pascalCase: true }), "");
  assertEquals(camelCase(["---_", "--", "", "-_- "], { pascalCase: true }), "");
  assertEquals(camelCase("foo bar?", { pascalCase: true }), "FooBar?");
  assertEquals(camelCase("foo bar!", { pascalCase: true }), "FooBar!");
  assertEquals(camelCase("foo bar$", { pascalCase: true }), "FooBar$");
  assertEquals(camelCase("foo-bar#", { pascalCase: true }), "FooBar#");
  assertEquals(
    camelCase("XMLHttpRequest", { pascalCase: true }),
    "XmlHttpRequest",
  );
  assertEquals(
    camelCase("AjaxXMLHttpRequest", { pascalCase: true }),
    "AjaxXmlHttpRequest",
  );
  assertEquals(
    camelCase("Ajax-XMLHttpRequest", { pascalCase: true }),
    "AjaxXmlHttpRequest",
  );
  assertEquals(camelCase([], { pascalCase: true }), "");
  assertEquals(camelCase("mGridCol6@md", { pascalCase: true }), "MGridCol6@md");
  assertEquals(camelCase("A::a", { pascalCase: true }), "A::a");
  assertEquals(camelCase("Hello1World", { pascalCase: true }), "Hello1World");
  assertEquals(camelCase("Hello11World", { pascalCase: true }), "Hello11World");
  assertEquals(camelCase("hello1world", { pascalCase: true }), "Hello1World");
  assertEquals(camelCase("hello1World", { pascalCase: true }), "Hello1World");
  assertEquals(camelCase("hello1", { pascalCase: true }), "Hello1");
  assertEquals(camelCase("Hello1", { pascalCase: true }), "Hello1");
  assertEquals(camelCase("1hello", { pascalCase: true }), "1Hello");
  assertEquals(camelCase("1Hello", { pascalCase: true }), "1Hello");
  assertEquals(camelCase("h1W", { pascalCase: true }), "H1W");
  assertEquals(
    camelCase("РозовыйПушистыйЕдинороги", { pascalCase: true }),
    "РозовыйПушистыйЕдинороги",
  );
  assertEquals(
    camelCase("розовый_пушистый-единороги", { pascalCase: true }),
    "РозовыйПушистыйЕдинороги",
  );
  assertEquals(
    camelCase("РОЗОВЫЙ_ПУШИСТЫЙ-ЕДИНОРОГИ", { pascalCase: true }),
    "РозовыйПушистыйЕдинороги",
  );
  assertEquals(camelCase("桑德在这里。", { pascalCase: true }), "桑德在这里。");
  assertEquals(
    camelCase("桑德_在这里。", { pascalCase: true }),
    "桑德在这里。",
  );
});

Deno.test("camelCase with preserveConsecutiveUppercase option", () => {
  assertEquals(
    camelCase("foo-BAR", { preserveConsecutiveUppercase: true }),
    "fooBAR",
  );
  assertEquals(
    camelCase("Foo-BAR", { preserveConsecutiveUppercase: true }),
    "fooBAR",
  );
  assertEquals(
    camelCase("fooBAR", { preserveConsecutiveUppercase: true }),
    "fooBAR",
  );
  assertEquals(
    camelCase("fooBaR", { preserveConsecutiveUppercase: true }),
    "fooBaR",
  );
  assertEquals(
    camelCase("FOÈ-BAR", { preserveConsecutiveUppercase: true }),
    "FOÈBAR",
  );
  assertEquals(
    camelCase(["foo", "BAR"], { preserveConsecutiveUppercase: true }),
    "fooBAR",
  );
  assertEquals(
    camelCase(["foo", "-BAR"], { preserveConsecutiveUppercase: true }),
    "fooBAR",
  );
  assertEquals(
    camelCase(["foo", "-BAR", "baz"], { preserveConsecutiveUppercase: true }),
    "fooBARBaz",
  );
  assertEquals(camelCase(["", ""], { preserveConsecutiveUppercase: true }), "");
  assertEquals(camelCase("--", { preserveConsecutiveUppercase: true }), "");
  assertEquals(camelCase("", { preserveConsecutiveUppercase: true }), "");
  assertEquals(
    camelCase("--__--_--_", { preserveConsecutiveUppercase: true }),
    "",
  );
  assertEquals(
    camelCase(["---_", "--", "", "-_- "], {
      preserveConsecutiveUppercase: true,
    }),
    "",
  );
  assertEquals(
    camelCase("foo BAR?", { preserveConsecutiveUppercase: true }),
    "fooBAR?",
  );
  assertEquals(
    camelCase("foo BAR!", { preserveConsecutiveUppercase: true }),
    "fooBAR!",
  );
  assertEquals(
    camelCase("foo BAR$", { preserveConsecutiveUppercase: true }),
    "fooBAR$",
  );
  assertEquals(
    camelCase("foo-BAR#", { preserveConsecutiveUppercase: true }),
    "fooBAR#",
  );
  assertEquals(
    camelCase("XMLHttpRequest", { preserveConsecutiveUppercase: true }),
    "XMLHttpRequest",
  );
  assertEquals(
    camelCase("AjaxXMLHttpRequest", { preserveConsecutiveUppercase: true }),
    "ajaxXMLHttpRequest",
  );
  assertEquals(
    camelCase("Ajax-XMLHttpRequest", { preserveConsecutiveUppercase: true }),
    "ajaxXMLHttpRequest",
  );
  assertEquals(camelCase([], { preserveConsecutiveUppercase: true }), "");
  assertEquals(
    camelCase("mGridCOl6@md", { preserveConsecutiveUppercase: true }),
    "mGridCOl6@md",
  );
  assertEquals(
    camelCase("A::a", { preserveConsecutiveUppercase: true }),
    "a::a",
  );
  assertEquals(
    camelCase("Hello1WORLD", { preserveConsecutiveUppercase: true }),
    "hello1WORLD",
  );
  assertEquals(
    camelCase("Hello11WORLD", { preserveConsecutiveUppercase: true }),
    "hello11WORLD",
  );
  assertEquals(
    camelCase("РозовыйПушистыйFOOдинорогиf", {
      preserveConsecutiveUppercase: true,
    }),
    "розовыйПушистыйFOOдинорогиf",
  );
  assertEquals(
    camelCase("桑德在这里。", { preserveConsecutiveUppercase: true }),
    "桑德在这里。",
  );
  assertEquals(
    camelCase("桑德_在这里。", { preserveConsecutiveUppercase: true }),
    "桑德在这里。",
  );
  assertEquals(
    camelCase("FooIDs", { preserveConsecutiveUppercase: true }),
    "fooIDs",
  );
});

Deno.test(
  "camelCase with both pascalCase and preserveConsecutiveUppercase option",
  () => {
    assertEquals(
      camelCase("foo-BAR", {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      "FooBAR",
    );
    assertEquals(
      camelCase("fooBAR", {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      "FooBAR",
    );
    assertEquals(
      camelCase("fooBaR", {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      "FooBaR",
    );
    assertEquals(
      camelCase("fOÈ-BAR", {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      "FOÈBAR",
    );
    assertEquals(
      camelCase("--foo.BAR", {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      "FooBAR",
    );
    assertEquals(
      camelCase(["Foo", "BAR"], {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      "FooBAR",
    );
    assertEquals(
      camelCase(["foo", "-BAR"], {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      "FooBAR",
    );
    assertEquals(
      camelCase(["foo", "-BAR", "baz"], {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      "FooBARBaz",
    );
    assertEquals(
      camelCase(["", ""], {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      "",
    );
    assertEquals(
      camelCase("--", { pascalCase: true, preserveConsecutiveUppercase: true }),
      "",
    );
    assertEquals(
      camelCase("", { pascalCase: true, preserveConsecutiveUppercase: true }),
      "",
    );
    assertEquals(
      camelCase("--__--_--_", {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      "",
    );
    assertEquals(
      camelCase(["---_", "--", "", "-_- "], {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      "",
    );
    assertEquals(
      camelCase("foo BAR?", {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      "FooBAR?",
    );
    assertEquals(
      camelCase("foo BAR!", {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      "FooBAR!",
    );
    assertEquals(
      camelCase("Foo BAR$", {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      "FooBAR$",
    );
    assertEquals(
      camelCase("foo-BAR#", {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      "FooBAR#",
    );
    assertEquals(
      camelCase("xMLHttpRequest", {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      "XMLHttpRequest",
    );
    assertEquals(
      camelCase("ajaxXMLHttpRequest", {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      "AjaxXMLHttpRequest",
    );
    assertEquals(
      camelCase("Ajax-XMLHttpRequest", {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      "AjaxXMLHttpRequest",
    );
    assertEquals(
      camelCase([], { pascalCase: true, preserveConsecutiveUppercase: true }),
      "",
    );
    assertEquals(
      camelCase("mGridCOl6@md", {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      "MGridCOl6@md",
    );
    assertEquals(
      camelCase("A::a", {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      "A::a",
    );
    assertEquals(
      camelCase("Hello1WORLD", {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      "Hello1WORLD",
    );
    assertEquals(
      camelCase("Hello11WORLD", {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      "Hello11WORLD",
    );
    assertEquals(
      camelCase("pозовыйПушистыйFOOдинорогиf", {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      "PозовыйПушистыйFOOдинорогиf",
    );
    assertEquals(
      camelCase("桑德在这里。", {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      "桑德在这里。",
    );
    assertEquals(
      camelCase("桑德_在这里。", {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
      }),
      "桑德在这里。",
    );
  },
);

Deno.test("camelCase with locale option", () => {
  assertEquals(camelCase("lorem-ipsum", { locale: "tr-TR" }), "loremİpsum");
  assertEquals(camelCase("lorem-ipsum", { locale: "en-EN" }), "loremIpsum");
  assertEquals(
    camelCase("lorem-ipsum", { locale: ["tr", "TR", "tr-TR"] }),
    "loremİpsum",
  );
  assertEquals(
    camelCase("lorem-ipsum", { locale: ["en-EN", "en-GB"] }),
    "loremIpsum",
  );
  assertEquals(
    camelCase("ipsum-dolor", { pascalCase: true, locale: "tr-TR" }),
    "İpsumDolor",
  );
  assertEquals(
    camelCase("ipsum-dolor", { pascalCase: true, locale: "en-EN" }),
    "IpsumDolor",
  );
  assertEquals(
    camelCase("ipsum-dolor", {
      pascalCase: true,
      locale: ["tr", "TR", "tr-TR"],
    }),
    "İpsumDolor",
  );
  assertEquals(
    camelCase("ipsum-dolor", { pascalCase: true, locale: ["en-EN", "en-GB"] }),
    "IpsumDolor",
  );
});

Deno.test("camelCase with disabled locale", () => {
  withLocaleCaseFunctionsMocked(() => {
    assertEquals(camelCase("lorem-ipsum", { locale: false }), "loremIpsum");
    assertEquals(
      camelCase("ipsum-dolor", { pascalCase: true, locale: false }),
      "IpsumDolor",
    );
    assertEquals(
      camelCase("ipsum-DOLOR", {
        pascalCase: true,
        locale: false,
        preserveConsecutiveUppercase: true,
      }),
      "IpsumDOLOR",
    );
  });
});

const withLocaleCaseFunctionsMocked = (fn: CallableFunction) => {
  const throwWhenBeingCalled = () => {
    throw new Error("Should not be called");
  };

  const toLocaleUpperCase = Object.getOwnPropertyDescriptor(
    String.prototype,
    "toLocaleUpperCase",
  );
  const toLocaleLowerCase = Object.getOwnPropertyDescriptor(
    String.prototype,
    "toLocaleLowerCase",
  );

  Object.defineProperty(String.prototype, "toLocaleUpperCase", {
    ...toLocaleUpperCase,
    value: throwWhenBeingCalled,
  });
  Object.defineProperty(String.prototype, "toLocaleLowerCase", {
    ...toLocaleLowerCase,
    value: throwWhenBeingCalled,
  });

  try {
    fn();
  } finally {
    Object.defineProperty(
      String.prototype,
      "toLocaleUpperCase",
      toLocaleUpperCase ?? {},
    );
    Object.defineProperty(
      String.prototype,
      "toLocaleLowerCase",
      toLocaleLowerCase ?? {},
    );
  }
};

Deno.test("Input Error", () => {
  assertThrows(() => {
    // @ts-ignore: It should throw
    camelCase(34);

    // @ts-ignore: It should throw
    camelCase([1, 2, 3]);
  });
});
