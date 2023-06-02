
const defaults = require('../../defaults');
const appwrite = require('../../appwrite');

module.exports = async (argv) => {
    const currentDefaults = defaults.loadDefaults() || {};
    if (currentDefaults.defaultProject != null) {
        const project = await appwrite.findProjectByName(currentDefaults.defaultProject);
        if (project != null) {
            console.log("\nCurrent project: " + project.$id);
        } else {
            console.log("\nCurrent project: none");
        }
    } else {
        console.log("\nCurrent project: none");
    }
}