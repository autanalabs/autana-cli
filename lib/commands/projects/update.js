
const appwrite = require('../../appwrite');

module.exports = (argv) => {
    appwrite.updateProject(argv.name, argv.projectId, argv.endpoint, argv.apiKey);
}