
const defaults = require('../../defaults');
const appwrite = require('../../appwrite');

module.exports = async (argv) => {
    const currentDefaults = defaults.loadDefaults() || {};
    const project = await appwrite.findProjectByName(argv.name);
    if (project != null) {
        currentDefaults.defaultProject = argv.name;
        defaults.saveDefaults(currentDefaults);
        console.log("\nNow using project '" + argv.name + "' as default.");
    }
}