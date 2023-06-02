
const appwrite = require('../../appwrite');
const defaults = require('../../defaults');

module.exports = (argv) => {
    const currentDefaults = defaults.loadDefaults() || {};
    const projectId = argv.projectId || currentDefaults.defaultProject;
    appwrite.listRules(projectId)
}