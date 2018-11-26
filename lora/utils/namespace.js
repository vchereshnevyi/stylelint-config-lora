const prefix = "lora";

module.exports = function namespace(ruleName) {
    return `${prefix}/${ruleName}`;
}