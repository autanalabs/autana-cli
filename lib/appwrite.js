
const credentials = require('./credentials');
const projectsCollection = "projects";
const rulesCollection = "rules";

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

function createProject(name, projectId, endpoint, apiKey) {
    const { databases, databaseName } = getDatabase();
    const promise = databases.createDocument(databaseName,
        projectsCollection, name, {
        endpoint: endpoint,
        projectId: projectId,
        apiKey: apiKey
    });

    promise.then(function (response) {
        console.log("Project created successfully");
    }, function (error) {
        console.log("Error: " + error.response.message);
    });
}

module.exports = {
    createProject

};