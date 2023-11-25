module.exports = {
  arrowParens: "always",
  htmlWhitespaceSensitivity: "css",
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 100,
  proseWrap: "preserve",
  quoteProps: "as-needed",
  semi: false,
  singleQuote: false,
  tabWidth: 4,
  trailingComma: "all",
  useTabs: false,
  bracketSpacing: true,
  overrides: [
    {
      files: "*.json",
      options: {
        printWidth: 160,
      },
    },
  ],
}
