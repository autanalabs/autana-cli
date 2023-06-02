
const appwrite = require('../../appwrite');

module.exports = (argv) => {
    appwrite.createProject(argv.name, argv.projectId, argv.endpoint, argv.apiKey);
}