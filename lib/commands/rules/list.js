
const appwrite = require('../../appwrite');

module.exports = (argv) => { 
    appwrite.listRules(argv.projectId)
}