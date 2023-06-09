
const appwrite = require('../../appwrite');

module.exports = (argv) => { 
    appwrite.createRule(argv.projectId, argv.actionId, 
        argv.command, argv.path, 'DOCUMENT', argv.do,
        argv.di, argv.ci, argv.it, argv.ot, argv.ar);
}