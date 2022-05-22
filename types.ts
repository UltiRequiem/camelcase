export interface CamelCaseOptions {
  /**
		Uppercase the first character: `foo-bar` → `FooBar`.
		@default false
		*/
  readonly pascalCase?: boolean;

  /**
		Preserve the consecutive uppercase characters: `foo-BAR` → `FooBAR`.
		@default false
		*/
  readonly preserveConsecutiveUppercase?: boolean;

  /**
		The locale parameter indicates the locale to be used to convert to
    upper/lower case according to any locale-specific case mappings.
    If multiple locales are given in an array,
    the best available locale is used.

		Setting `locale: false` ignores the platform locale and uses the [Unicode Default Case Conversion](https://unicode-org.github.io/icu/userguide/transforms/casemappings.html#simple-single-character-case-mapping) algorithm.
		Default: The host environment’s current locale.

		@example
		```js
		camelCase('lorem-ipsum', {locale: 'en-US'});
		//=> 'loremIpsum'
		camelCase('lorem-ipsum', {locale: 'tr-TR'});
		//=> 'loremİpsum'
		camelCase('lorem-ipsum', {locale: ['en-US', 'en-GB']});
		//=> 'loremIpsum'
		camelCase('lorem-ipsum', {locale: ['tr', 'TR', 'tr-TR']});
		//=> 'loremİpsum'
		```
		*/
  readonly locale?: false | string | readonly string[];
}
