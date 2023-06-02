
const appwrite = require('../../appwrite');

module.exports = (argv) => { 
    appwrite.ruletAttributes(argv.projectId, argv.actionId)
}