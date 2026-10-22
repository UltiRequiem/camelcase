import { expect, it } from "vitest";
import { camelCase } from "./index.js";

it("camelCase", () => {
	expect(camelCase("foo")).toEqual("foo");
	expect(camelCase("foo-bar")).toEqual("fooBar");
	expect(camelCase("foo-bar-baz")).toEqual("fooBarBaz");
	expect(camelCase("foo--bar")).toEqual("fooBar");
	expect(camelCase("--foo-bar")).toEqual("fooBar");
	expect(camelCase("--foo--bar")).toEqual("fooBar");
	expect(camelCase("FOO-BAR")).toEqual("fooBar");
	expect(camelCase("FOÈ-BAR")).toEqual("foèBar");
	expect(camelCase("-foo-bar-")).toEqual("fooBar");
	expect(camelCase("--foo--bar--")).toEqual("fooBar");
	expect(camelCase("foo-1")).toEqual("foo1");
	expect(camelCase("foo.bar")).toEqual("fooBar");
	expect(camelCase("foo..bar")).toEqual("fooBar");
	expect(camelCase("..foo..bar..")).toEqual("fooBar");
	expect(camelCase("foo_bar")).toEqual("fooBar");
	expect(camelCase("__foo__bar__")).toEqual("fooBar");
	expect(camelCase("foo bar")).toEqual("fooBar");
	expect(camelCase("  foo  bar  ")).toEqual("fooBar");
	expect(camelCase("-")).toEqual("-");
	expect(camelCase(" - ")).toEqual("-");
	expect(camelCase("fooBar")).toEqual("fooBar");
	expect(camelCase("fooBar-baz")).toEqual("fooBarBaz");
	expect(camelCase("foìBar-baz")).toEqual("foìBarBaz");
	expect(camelCase("fooBarBaz-bazzy")).toEqual("fooBarBazBazzy");
	expect(camelCase("FBBazzy")).toEqual("fbBazzy");
	expect(camelCase("F")).toEqual("f");
	expect(camelCase("FooBar")).toEqual("fooBar");
	expect(camelCase("Foo")).toEqual("foo");
	expect(camelCase("FOO")).toEqual("foo");
	expect(camelCase(["foo", "bar"])).toEqual("fooBar");
	expect(camelCase(["foo", "-bar"])).toEqual("fooBar");
	expect(camelCase(["foo", "-bar", "baz"])).toEqual("fooBarBaz");
	expect(camelCase(["", ""])).toEqual("");
	expect(camelCase("--")).toEqual("");
	expect(camelCase("")).toEqual("");
	expect(camelCase("--__--_--_")).toEqual("");
	expect(camelCase(["---_", "--", "", "-_- "])).toEqual("");
	expect(camelCase("foo bar?")).toEqual("fooBar?");
	expect(camelCase("foo bar!")).toEqual("fooBar!");
	expect(camelCase("foo bar$")).toEqual("fooBar$");
	expect(camelCase("foo-bar#")).toEqual("fooBar#");
	expect(camelCase("XMLHttpRequest")).toEqual("xmlHttpRequest");
	expect(camelCase("AjaxXMLHttpRequest")).toEqual("ajaxXmlHttpRequest");
	expect(camelCase("Ajax-XMLHttpRequest")).toEqual("ajaxXmlHttpRequest");
	expect(camelCase([])).toEqual("");
	expect(camelCase("mGridCol6@md")).toEqual("mGridCol6@md");
	expect(camelCase("A::a")).toEqual("a::a");
	expect(camelCase("Hello1World")).toEqual("hello1World");
	expect(camelCase("Hello11World")).toEqual("hello11World");
	expect(camelCase("hello1world")).toEqual("hello1World");
	expect(camelCase("Hello1World11foo")).toEqual("hello1World11Foo");
	expect(camelCase("Hello1")).toEqual("hello1");
	expect(camelCase("hello1")).toEqual("hello1");
	expect(camelCase("1Hello")).toEqual("1Hello");
	expect(camelCase("1hello")).toEqual("1Hello");
	expect(camelCase("h2w")).toEqual("h2W");
	expect(camelCase("розовый_пушистый-единороги")).toEqual(
		"розовыйПушистыйЕдинороги",
	);
	expect(camelCase("розовый_пушистый-единороги")).toEqual(
		"розовыйПушистыйЕдинороги",
	);
	expect(camelCase("РОЗОВЫЙ_ПУШИСТЫЙ-ЕДИНОРОГИ")).toEqual(
		"розовыйПушистыйЕдинороги",
	);
	expect(camelCase("桑德在这里。")).toEqual("桑德在这里。");
	expect(camelCase("桑德在这里。")).toEqual("桑德在这里。");
	expect(camelCase("桑德_在这里。")).toEqual("桑德在这里。");
});

it("camelCase with pascalCase option", () => {
	expect(camelCase("foo", { pascalCase: true })).toEqual("Foo");
	expect(camelCase("foo-bar", { pascalCase: true })).toEqual("FooBar");
	expect(camelCase("foo-bar-baz", { pascalCase: true })).toEqual("FooBarBaz");
	expect(camelCase("foo--bar", { pascalCase: true })).toEqual("FooBar");
	expect(camelCase("--foo-bar", { pascalCase: true })).toEqual("FooBar");
	expect(camelCase("--foo--bar", { pascalCase: true })).toEqual("FooBar");
	expect(camelCase("FOO-BAR", { pascalCase: true })).toEqual("FooBar");
	expect(camelCase("FOÈ-BAR", { pascalCase: true })).toEqual("FoèBar");
	expect(camelCase("-foo-bar-", { pascalCase: true })).toEqual("FooBar");
	expect(camelCase("--foo--bar--", { pascalCase: true })).toEqual("FooBar");
	expect(camelCase("foo-1", { pascalCase: true })).toEqual("Foo1");
	expect(camelCase("foo.bar", { pascalCase: true })).toEqual("FooBar");
	expect(camelCase("foo..bar", { pascalCase: true })).toEqual("FooBar");
	expect(camelCase("..foo..bar..", { pascalCase: true })).toEqual("FooBar");
	expect(camelCase("foo_bar", { pascalCase: true })).toEqual("FooBar");
	expect(camelCase("__foo__bar__", { pascalCase: true })).toEqual("FooBar");
	expect(camelCase("__foo__bar__", { pascalCase: true })).toEqual("FooBar");
	expect(camelCase("foo bar", { pascalCase: true })).toEqual("FooBar");
	expect(camelCase("  foo  bar  ", { pascalCase: true })).toEqual("FooBar");
	expect(camelCase("-", { pascalCase: true })).toEqual("-");
	expect(camelCase(" - ", { pascalCase: true })).toEqual("-");
	expect(camelCase("fooBar", { pascalCase: true })).toEqual("FooBar");
	expect(camelCase("fooBar-baz", { pascalCase: true })).toEqual("FooBarBaz");
	expect(camelCase("foìBar-baz", { pascalCase: true })).toEqual("FoìBarBaz");
	expect(camelCase("fooBarBaz-bazzy", { pascalCase: true })).toEqual(
		"FooBarBazBazzy",
	);
	expect(camelCase("FBBazzy", { pascalCase: true })).toEqual("FbBazzy");
	expect(camelCase("F", { pascalCase: true })).toEqual("F");
	expect(camelCase("FooBar", { pascalCase: true })).toEqual("FooBar");
	expect(camelCase("Foo", { pascalCase: true })).toEqual("Foo");
	expect(camelCase("FOO", { pascalCase: true })).toEqual("Foo");
	expect(camelCase(["foo", "bar"], { pascalCase: true })).toEqual("FooBar");
	expect(camelCase(["foo", "-bar"], { pascalCase: true })).toEqual("FooBar");
	expect(camelCase(["foo", "-bar", "baz"], { pascalCase: true })).toEqual(
		"FooBarBaz",
	);
	expect(camelCase(["", ""], { pascalCase: true })).toEqual("");
	expect(camelCase("--", { pascalCase: true })).toEqual("");
	expect(camelCase("", { pascalCase: true })).toEqual("");
	expect(camelCase("--__--_--_", { pascalCase: true })).toEqual("");
	expect(camelCase(["---_", "--", "", "-_- "], { pascalCase: true })).toEqual(
		"",
	);
	expect(camelCase("foo bar?", { pascalCase: true })).toEqual("FooBar?");
	expect(camelCase("foo bar!", { pascalCase: true })).toEqual("FooBar!");
	expect(camelCase("foo bar$", { pascalCase: true })).toEqual("FooBar$");
	expect(camelCase("foo-bar#", { pascalCase: true })).toEqual("FooBar#");
	expect(camelCase("XMLHttpRequest", { pascalCase: true })).toEqual(
		"XmlHttpRequest",
	);
	expect(camelCase("AjaxXMLHttpRequest", { pascalCase: true })).toEqual(
		"AjaxXmlHttpRequest",
	);
	expect(camelCase("Ajax-XMLHttpRequest", { pascalCase: true })).toEqual(
		"AjaxXmlHttpRequest",
	);
	expect(camelCase([], { pascalCase: true })).toEqual("");
	expect(camelCase("mGridCol6@md", { pascalCase: true })).toEqual(
		"MGridCol6@md",
	);
	expect(camelCase("A::a", { pascalCase: true })).toEqual("A::a");
	expect(camelCase("Hello1World", { pascalCase: true })).toEqual("Hello1World");
	expect(camelCase("Hello11World", { pascalCase: true })).toEqual(
		"Hello11World",
	);
	expect(camelCase("hello1world", { pascalCase: true })).toEqual("Hello1World");
	expect(camelCase("hello1World", { pascalCase: true })).toEqual("Hello1World");
	expect(camelCase("hello1", { pascalCase: true })).toEqual("Hello1");
	expect(camelCase("Hello1", { pascalCase: true })).toEqual("Hello1");
	expect(camelCase("1hello", { pascalCase: true })).toEqual("1Hello");
	expect(camelCase("1Hello", { pascalCase: true })).toEqual("1Hello");
	expect(camelCase("h1W", { pascalCase: true })).toEqual("H1W");
	expect(camelCase("РозовыйПушистыйЕдинороги", { pascalCase: true })).toEqual(
		"РозовыйПушистыйЕдинороги",
	);
	expect(camelCase("розовый_пушистый-единороги", { pascalCase: true })).toEqual(
		"РозовыйПушистыйЕдинороги",
	);
	expect(camelCase("РОЗОВЫЙ_ПУШИСТЫЙ-ЕДИНОРОГИ", { pascalCase: true })).toEqual(
		"РозовыйПушистыйЕдинороги",
	);
	expect(camelCase("桑德在这里。", { pascalCase: true })).toEqual(
		"桑德在这里。",
	);
	expect(camelCase("桑德_在这里。", { pascalCase: true })).toEqual(
		"桑德在这里。",
	);
});

it("camelCase with preserveConsecutiveUppercase option", () => {
	expect(camelCase("foo-BAR", { preserveConsecutiveUppercase: true })).toEqual(
		"fooBAR",
	);
	expect(camelCase("Foo-BAR", { preserveConsecutiveUppercase: true })).toEqual(
		"fooBAR",
	);
	expect(camelCase("fooBAR", { preserveConsecutiveUppercase: true })).toEqual(
		"fooBAR",
	);
	expect(camelCase("fooBaR", { preserveConsecutiveUppercase: true })).toEqual(
		"fooBaR",
	);
	expect(camelCase("FOÈ-BAR", { preserveConsecutiveUppercase: true })).toEqual(
		"FOÈBAR",
	);
	expect(
		camelCase(["foo", "BAR"], { preserveConsecutiveUppercase: true }),
	).toEqual("fooBAR");
	expect(
		camelCase(["foo", "-BAR"], { preserveConsecutiveUppercase: true }),
	).toEqual("fooBAR");
	expect(
		camelCase(["foo", "-BAR", "baz"], { preserveConsecutiveUppercase: true }),
	).toEqual("fooBARBaz");
	expect(camelCase(["", ""], { preserveConsecutiveUppercase: true })).toEqual(
		"",
	);
	expect(camelCase("--", { preserveConsecutiveUppercase: true })).toEqual("");
	expect(camelCase("", { preserveConsecutiveUppercase: true })).toEqual("");
	expect(
		camelCase("--__--_--_", { preserveConsecutiveUppercase: true }),
	).toEqual("");
	expect(
		camelCase(["---_", "--", "", "-_- "], {
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("");
	expect(camelCase("foo BAR?", { preserveConsecutiveUppercase: true })).toEqual(
		"fooBAR?",
	);
	expect(camelCase("foo BAR!", { preserveConsecutiveUppercase: true })).toEqual(
		"fooBAR!",
	);
	expect(camelCase("foo BAR$", { preserveConsecutiveUppercase: true })).toEqual(
		"fooBAR$",
	);
	expect(camelCase("foo-BAR#", { preserveConsecutiveUppercase: true })).toEqual(
		"fooBAR#",
	);
	expect(
		camelCase("XMLHttpRequest", { preserveConsecutiveUppercase: true }),
	).toEqual("XMLHttpRequest");
	expect(
		camelCase("AjaxXMLHttpRequest", { preserveConsecutiveUppercase: true }),
	).toEqual("ajaxXMLHttpRequest");
	expect(
		camelCase("Ajax-XMLHttpRequest", { preserveConsecutiveUppercase: true }),
	).toEqual("ajaxXMLHttpRequest");
	expect(camelCase([], { preserveConsecutiveUppercase: true })).toEqual("");
	expect(
		camelCase("mGridCOl6@md", { preserveConsecutiveUppercase: true }),
	).toEqual("mGridCOl6@md");
	expect(camelCase("A::a", { preserveConsecutiveUppercase: true })).toEqual(
		"a::a",
	);
	expect(
		camelCase("Hello1WORLD", { preserveConsecutiveUppercase: true }),
	).toEqual("hello1WORLD");
	expect(
		camelCase("Hello11WORLD", { preserveConsecutiveUppercase: true }),
	).toEqual("hello11WORLD");
	expect(
		camelCase("РозовыйПушистыйFOOдинорогиf", {
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("розовыйПушистыйFOOдинорогиf");
	expect(
		camelCase("桑德在这里。", { preserveConsecutiveUppercase: true }),
	).toEqual("桑德在这里。");
	expect(
		camelCase("桑德_在这里。", { preserveConsecutiveUppercase: true }),
	).toEqual("桑德在这里。");
	expect(camelCase("FooIDs", { preserveConsecutiveUppercase: true })).toEqual(
		"fooIDs",
	);
});

it("camelCase with both pascalCase and preserveConsecutiveUppercase option", () => {
	expect(
		camelCase("foo-BAR", {
			pascalCase: true,
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("FooBAR");
	expect(
		camelCase("fooBAR", {
			pascalCase: true,
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("FooBAR");
	expect(
		camelCase("fooBaR", {
			pascalCase: true,
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("FooBaR");
	expect(
		camelCase("fOÈ-BAR", {
			pascalCase: true,
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("FOÈBAR");
	expect(
		camelCase("--foo.BAR", {
			pascalCase: true,
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("FooBAR");
	expect(
		camelCase(["Foo", "BAR"], {
			pascalCase: true,
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("FooBAR");
	expect(
		camelCase(["foo", "-BAR"], {
			pascalCase: true,
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("FooBAR");
	expect(
		camelCase(["foo", "-BAR", "baz"], {
			pascalCase: true,
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("FooBARBaz");
	expect(
		camelCase(["", ""], {
			pascalCase: true,
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("");
	expect(
		camelCase("--", { pascalCase: true, preserveConsecutiveUppercase: true }),
	).toEqual("");
	expect(
		camelCase("", { pascalCase: true, preserveConsecutiveUppercase: true }),
	).toEqual("");
	expect(
		camelCase("--__--_--_", {
			pascalCase: true,
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("");
	expect(
		camelCase(["---_", "--", "", "-_- "], {
			pascalCase: true,
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("");
	expect(
		camelCase("foo BAR?", {
			pascalCase: true,
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("FooBAR?");
	expect(
		camelCase("foo BAR!", {
			pascalCase: true,
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("FooBAR!");
	expect(
		camelCase("Foo BAR$", {
			pascalCase: true,
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("FooBAR$");
	expect(
		camelCase("foo-BAR#", {
			pascalCase: true,
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("FooBAR#");
	expect(
		camelCase("xMLHttpRequest", {
			pascalCase: true,
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("XMLHttpRequest");
	expect(
		camelCase("ajaxXMLHttpRequest", {
			pascalCase: true,
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("AjaxXMLHttpRequest");
	expect(
		camelCase("Ajax-XMLHttpRequest", {
			pascalCase: true,
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("AjaxXMLHttpRequest");
	expect(
		camelCase([], { pascalCase: true, preserveConsecutiveUppercase: true }),
	).toEqual("");
	expect(
		camelCase("mGridCOl6@md", {
			pascalCase: true,
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("MGridCOl6@md");
	expect(
		camelCase("A::a", {
			pascalCase: true,
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("A::a");
	expect(
		camelCase("Hello1WORLD", {
			pascalCase: true,
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("Hello1WORLD");
	expect(
		camelCase("Hello11WORLD", {
			pascalCase: true,
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("Hello11WORLD");
	expect(
		camelCase("pозовыйПушистыйFOOдинорогиf", {
			pascalCase: true,
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("PозовыйПушистыйFOOдинорогиf");
	expect(
		camelCase("桑德在这里。", {
			pascalCase: true,
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("桑德在这里。");
	expect(
		camelCase("桑德_在这里。", {
			pascalCase: true,
			preserveConsecutiveUppercase: true,
		}),
	).toEqual("桑德在这里。");
});

it("camelCase with locale option", () => {
	expect(camelCase("lorem-ipsum", { locale: "tr-TR" })).toEqual("loremİpsum");
	expect(camelCase("lorem-ipsum", { locale: "en-EN" })).toEqual("loremIpsum");
	expect(camelCase("lorem-ipsum", { locale: ["tr", "TR", "tr-TR"] })).toEqual(
		"loremİpsum",
	);
	expect(camelCase("lorem-ipsum", { locale: ["en-EN", "en-GB"] })).toEqual(
		"loremIpsum",
	);
	expect(
		camelCase("ipsum-dolor", { pascalCase: true, locale: "tr-TR" }),
	).toEqual("İpsumDolor");
	expect(
		camelCase("ipsum-dolor", { pascalCase: true, locale: "en-EN" }),
	).toEqual("IpsumDolor");
	expect(
		camelCase("ipsum-dolor", {
			pascalCase: true,
			locale: ["tr", "TR", "tr-TR"],
		}),
	).toEqual("İpsumDolor");
	expect(
		camelCase("ipsum-dolor", { pascalCase: true, locale: ["en-EN", "en-GB"] }),
	).toEqual("IpsumDolor");
});

it("camelCase with disabled locale", () => {
	withLocaleCaseFunctionsMocked(() => {
		expect(camelCase("lorem-ipsum", { locale: false })).toEqual("loremIpsum");
		expect(
			camelCase("ipsum-dolor", { pascalCase: true, locale: false }),
		).toEqual("IpsumDolor");
		expect(
			camelCase("ipsum-DOLOR", {
				pascalCase: true,
				locale: false,
				preserveConsecutiveUppercase: true,
			}),
		).toEqual("IpsumDOLOR");
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

it("Input Error", () => {
	expect(() => {
		// @ts-ignore: It should throw
		camelCase(34);

		// @ts-ignore: It should throw
		camelCase([1, 2, 3]);
	}).toThrow();
});
