
const appwrite = require('../../appwrite');

module.exports = (argv) => {
    console.log(JSON.stringify(argv));
    appwrite.createProject(argv.name, argv.projectId, argv.endpoint, argv.apiKey);
}