import { buildPackage } from "https://deno.land/x/ultirequiem@0.0.12/node_support.ts";

buildPackage(
  {
    repoName: "camelcase",
    description:
      "Convert a dash/dot/underscore/space separated string to camelCase or PascalCase: `foo-bar` → `fooBar`",
    homepage: "https://camelcase.js.org",
    keywords: ["camelcase", "camel-case", "text"],
    version: "2.0.0",
  },
);
