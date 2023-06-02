
const credentials = require('../credentials');

function getDatabase() {
    const sdk = require('node-appwrite');
   
    const client = new sdk.Client();
    const databases = new sdk.Databases(client);

    const storedCredentials = credentials.loadCredentials();
    const databaseName = storedCredentials.database;

    client
        .setEndpoint(storedCredentials.endpoint) // Your API Endpoint
        .setProject(storedCredentials.projectId) // Your project ID
        .setKey(storedCredentials.apiKey) // Your secret API key
        ;
  
    return { databases, databaseName };

}

module.exports = {
    getDatabase
}