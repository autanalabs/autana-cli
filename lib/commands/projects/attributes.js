
const appwrite = require('../../appwrite');

module.exports = (argv) => {
    appwrite.projectAttributes(argv.name);
}