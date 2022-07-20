"use strict"

module.exports = {
    "extends": "stylelint-config-standard-scss",
    "plugins": [
        "stylelint-selector-bem-pattern",
        "stylelint-declaration-strict-value",
        "./lora/index.js"
    ],
    "rules": {
        "selector-class-pattern": "^(?:(?:c|l|u)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$",
        "no-missing-end-of-source-newline": null,
        "no-extra-semicolons": true,
        "at-rule-empty-line-before": null,
        "at-rule-no-unknown": [true, {
            "ignoreAtRules": ["at-root", "debug", "warn", "error", "if", "else", "for", "each", "while", "mixin", "include", "content", "return", "function"]
        }],
        "comment-whitespace-inside": null,
        "scss/dollar-variable-pattern": null,
        "scss/at-rule-conditional-no-parentheses": null,
        "scss/double-slash-comment-empty-line-before": null,
        "scss/at-import-no-partial-leading-underscore": null,
        "scss/dollar-variable-empty-line-before": null,
        "scss/double-slash-comment-whitespace-inside": null,
        "scss/at-mixin-argumentless-call-parentheses": null,
        "scss/at-mixin-parentheses-space-before": null,
        "scss/no-global-function-names": null,
        "scss/operator-no-unspaced": null,
        "scss/at-if-closing-brace-newline-after": null,
        "scss/at-if-closing-brace-space-after": null,
        "scss/at-else-closing-brace-newline-after": null,
        "scss/at-else-closing-brace-space-after": null,
        "scss/at-if-no-null": null,
        "selector-not-notation": null,
        "declaration-block-no-redundant-longhand-properties": null,
        "color-function-notation": null,
        "string-quotes": null,
        "value-no-vendor-prefix": null,
        "alpha-value-notation": null,
        "max-line-length": null,
        "value-keyword-case": null,
        "keyframes-name-pattern": null,
        "property-no-vendor-prefix": null,
        "block-no-empty": null,
        "no-eol-whitespace": [true, { "ignore": ["empty-lines"] }],
        "max-nesting-depth": 3,
        "indentation": 4,
        "selector-max-compound-selectors": 3,
        "selector-max-id": 0,
        "no-descending-specificity": null,
        "selector-no-qualifying-type": true,
        "selector-pseudo-element-colon-notation": "double",
        "color-hex-case": "lower",
        "color-hex-length": "short",
        "color-named": "never",
        "declaration-no-important": true,
        "color-no-invalid-hex": true,
        "shorthand-property-no-redundant-values": true,
        "font-family-name-quotes": "always-where-recommended",
        "time-min-milliseconds": 100,
        "selector-max-type": 1,
        "selector-max-universal": 1,
        "no-duplicate-at-import-rules": true,
        "media-feature-name-disallowed-list": [
            ["max-width", "min-width", "min-resolution", "max-resolution"],
            {
                "message": "hard-coded media queries are forbidden' (media-feature-name-disallowed-list)"
            }
        ],
        "property-no-unknown": [true, {
            "ignoreProperties": ["overscroll-behavior"]
        }
        ],
        "plugin/selector-bem-pattern": {
            "componentName": "[A-Z]+",
            "componentSelectors": {
                "initial": "^\\.{componentName}(?:-[a-z]+)?$",
                "combined": "^\\.combined-{componentName}-[a-z]+$"
            },
            "utilitySelectors": "^\\.util-[a-z]+$"
        },
        "scale-unlimited/declaration-strict-value": [["/color/", "z-index", "font-size"], { 
            ignoreValues: {
                "/color/": ["inherit"],
                "z-index":  ["0", "-1", "/z\(.*\)/", "inherit"],
                "font-size": ["0", "inherit"]
            },
        }],

        // LORA specific rules
        "lora/variable-pattern": [/(components|layout)(\/.*\/)?\/*_.+.scss/, { ignore: 'local' }], // Pattern is meant to filter the files.
    }
};