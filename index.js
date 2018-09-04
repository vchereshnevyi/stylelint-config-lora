"use strict"

module.exports = {
    "extends": "stylelint-config-standard",
    "plugins": [
        "stylelint-selector-bem-pattern",
        "stylelint-declaration-use-variable"
    ],
    "rules": {
        "selector-class-pattern": "^(?:(?:c|l|u)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$",
        "no-missing-end-of-source-newline": null,
        "no-extra-semicolons": true,
        "at-rule-empty-line-before": null,
        "at-rule-no-unknown": [true, {
            "ignoreAtRules": ["extend", "at-root", "debug", "warn", "error", "if", "else", "for", "each", "while", "mixin", "include", "content", "return", "function"]
        }],
        "comment-whitespace-inside": null,
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
        "media-feature-name-blacklist": [
            ["max-width", "min-width", "min-resolution", "max-resolution"],
            {
                "message": "hard-coded media queries are forbidden' (media-feature-name-blacklist)"
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
        "sh-waqar/declaration-use-variable": [["/color/", "z-index", "font-size", { ignoreValues: ["0", "-1", "inherit", "/z\(.*\)/"] }]]
    }
};