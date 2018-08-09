# stylelint-config-lora
Centralized stylelint rules for all LORA project based.

## Installation
```bash
npm install stylelint-config-lora --save-dev
```

## Usage
If you've installed `stylelint-config-standard` locally within your project, just set your stylelint config to:
```json
{
  "extends": "stylelint-config-lora"
}
```

## Extending the config

Configuration can be extended but I highly encourage to not do it and stay with the initial configuration to keep consistency on all LORA based projects.

Simply add a "rules" key to your config, then add your overrides and additions there.

For example, to change the at-rule-no-unknown rule to use its ignoreAtRules option, turn off the block-no-empty rule, and add the unit-whitelist rule:
```json
{
  "extends": "stylelint-config-lora",
  "rules": {
    "at-rule-no-unknown": [ true, {
      "ignoreAtRules": [
        "extends"
      ]
    }],
    "block-no-empty": null,
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```