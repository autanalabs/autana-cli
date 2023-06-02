
const appwrite = require('../../appwrite');

module.exports = (argv) => {
    appwrite.removeProject(argv.name);
}