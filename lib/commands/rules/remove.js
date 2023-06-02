
const appwrite = require('../../appwrite');

module.exports = (argv) => { 
    appwrite.deleteRule(argv.projectId, argv.actionId);
}