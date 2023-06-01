
const sdk = require('node-appwrite');

// Initialize Appwrite client
const client = new sdk.Client();

let databaseName = "";
const projectsCollection = "projects";
const rulesCollection = "rules";

function getDatabase() {
    console.log("client: " + JSON.stringify(client));
    return new sdk.Databases(client);
}

function createProject(name, projectId, endpoint, apiKey) {
    const db = getDatabase();
    let promise = db.createDocument(databaseName, projectsCollection, name, {
        endpoint: endpoint,
        projectId: projectId,
        apiKey: apiKey
    });
    promise.then(function (response) {
        console.log("Project created");
    }, function (err) {
        console.log("error: " + JSON.stringify(err));
    });
}

module.exports = { client, databaseName, createProject

};