const isRegExp = require('lodash').isRegExp;
const isString = require('lodash').isArray;
const {report, ruleMessages, validateOptions} = require('stylelint').utils;
const namespace = require('../utils/namespace');
const optionsHaveIgnored = require('../utils/optionsHaveIgnored');

const ruleName = namespace("variable-pattern");

const messages = ruleMessages(ruleName, {
    expected: variable => `Expected variable to be prefixed by "${variable}" to match filename or file folder structure name`
});
    
const rule = function (filePattern, secondaryOptions) {
    return (root, result) => {
        const validOptions = validateOptions(
            result,
            ruleName,
            {
                actual: filePattern,
                possible: [isRegExp, isString]
            },
            {
                actual: secondaryOptions,
                possible: {
                    ignore: ["local", "global"]
                },
                optional: true
            }
        );

        if (!validOptions) {
            return;
        }

        const regexpPattern = isString(filePattern) ? new RegExp(filePattern) : filePattern;

        root.walkDecls(decl => {
            const { prop } = decl;

            const filepath = decl.source.input.file.replace(/\\/g,'/');

            // Should filter the SASS files that should apply the pattern 
            if (!(regexpPattern.test(filepath))) {
                return;
            }

            if (prop[0] !== "$") {
                return;
            }

            // If local or global variables need to be ignored
            if (
                (optionsHaveIgnored(secondaryOptions, "global") &&
                    decl.parent.type === "root") ||
                (optionsHaveIgnored(secondaryOptions, "local") && decl.parent.type !== "root")
            ) {
                return;
            }

            // get the filename
            const filePathArray = filepath.split('/');
            const filename = filePathArray.pop();
            const categoryFolder = filePathArray.pop();
            // Extract the name of the file without the extension
            const name = filename.replace(/^_(.+).scss/, '$1'); 

            // Make sure that the variable is starting with the filename
            let expectedPrefix = name;
            const filenameRegex = new RegExp(`^\\$${expectedPrefix}-`);

            // Test if the folder name is not starting with zero
            if (categoryFolder && !(/^0\d/.test(categoryFolder))) {
                const variableNameRegex = new RegExp(`^(${categoryFolder})-(.+)`);

                if (categoryFolder === name) {
                    // no need to prefix if folder name is same as file name
                    return;
                }
                // Test a scss file within a subfolder has to be prefixed by the folder name.
                expectedPrefix = `${categoryFolder}-${name.replace(variableNameRegex, '$2')}`;
                const filenameFolderRegex = new RegExp(`^\\$${expectedPrefix}`);
                if (filenameFolderRegex.test(prop)) {
                    return;
                };
            } else if (filenameRegex.test(prop)) {
                return;
            }
            
            report({
                message: messages.expected(`$${expectedPrefix}`),
                node: decl,
                result,
                ruleName
            });
        });
    };
}

rule.ruleName = ruleName;
rule.messages = messages;
module.exports = rule;