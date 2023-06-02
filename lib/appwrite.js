
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

function listProjects() {
    const { databases, databaseName } = getDatabase();
    const promise = databases.listDocuments(databaseName,
        projectsCollection);

    promise.then(function (response) {
        console.log("Project list:");
        response.documents.forEach((p) => {
            console.log(" - " + p.$id);
        });
        
    }, function (error) {
        console.log("Error: " + error.response.message);
    });
}

function projectAttributes(name) {
    const { databases, databaseName } = getDatabase();
    const promise = databases.listDocuments(databaseName,
        projectsCollection, ['equal("$id", '+ name +')']);

    promise.then(function (response) {
        if (response.total == 0) {
            console.log("Project not found.");
            return;
        }

        const p = response.documents[0];
        console.log("\nAttributes of project '" + name + "':");
        console.log(" - endpoint: " + p.endpoint);
        console.log(" - projectID: " + p.projectId);
        console.log(" - apiKey: " + p.apiKey.substring(0,4) + "..." + p.apiKey.slice(-4));
        
    }, function (error) {
        console.log("Error: " + error.response.message);
    });
}

module.exports = {
    createProject, listProjects, projectAttributes

};