
const defaults = require('../../defaults');

module.exports = (argv) => {
    const currentDefaults = defaults.loadDefaults() || {};
    currentDefaults.defaultProject = argv.name;
    defaults.saveDefaults(currentDefaults);
}