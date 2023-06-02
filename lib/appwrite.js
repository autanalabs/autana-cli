
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
        console.log("\nProject created successfully");
    }, function (error) {
        console.log("\nError: " + error.response.message);
    });
}

function listProjects() {
    const { databases, databaseName } = getDatabase();
    const promise = databases.listDocuments(databaseName,
        projectsCollection);

    promise.then(function (response) {
        console.log("\nProject list:");
        response.documents.forEach((p) => {
            console.log(" - " + p.$id);
        });
        
    }, function (error) {
        console.log("\nError: " + error.response.message);
    });
}
async function findProjectByName(name) {
    const { databases, databaseName } = getDatabase();
    return databases.listDocuments(databaseName,
        projectsCollection, ['equal("$id", '+ name +')'])
        .then(function (response) {
            if (response.total == 0) {
                console.log("\nProject not found.");
                return null;
            } else {
                return response.documents[0];
            }
        }, function (error) {
        console.log("\nError: " + error.response.message);
        return null;
    });
}

function projectAttributes(name) {
    const { databases, databaseName } = getDatabase();
    const promise = databases.listDocuments(databaseName,
        projectsCollection, ['equal("$id", '+ name +')']);

    promise.then(function (response) {
        if (response.total == 0) {
            console.log("\nProject not found.");
            return;
        }

        const p = response.documents[0];
        console.log("\nAttributes of project '" + name + "':");
        console.log(" - endpoint: " + p.endpoint);
        console.log(" - projectID: " + p.projectId);
        console.log(" - apiKey: " + p.apiKey.substring(0,4) + "..." + p.apiKey.slice(-4));
        
    }, function (error) {
        console.log("\nError: " + error.response.message);
    });
}

function removeProject(name) {
    const { databases, databaseName } = getDatabase();
    const promise = databases.listDocuments(databaseName,
        projectsCollection, ['equal("$id", '+ name +')']);

    promise.then(function (response) {
        if (response.total == 0) {
            console.log("\nProject not found.");
        } else {
            const deletePromise = databases.deleteDocument(databaseName,
                projectsCollection, name);

            deletePromise.then(function (response) {
                console.log("\nProject deleted successfully.");
            }, function (error) {
                console.log("\nError: " + error.response.message);
            });
        }
    }, function (error) {
        console.log("\nError: " + error.response.message);
    });
}

function updateProject(name, projectId, endpoint, apiKey) {
    const { databases, databaseName } = getDatabase();
    const findPromise = databases.listDocuments(databaseName,
        projectsCollection, ['equal("$id", '+ name +')']);

    findPromise.then(function (response) {
        if (response.total == 0) {
            console.log("\nProject not found.");
        } else {
            const p = response.documents[0];
            const data = {
                endpoint: endpoint || p.endpoint,
                projectId: projectId || p.projectId,
                apiKey: apiKey || p.apiKey
            };
            const updatePromise = databases.updateDocument(databaseName,
                projectsCollection, name, data);

            updatePromise.then(function (response) {
                console.log("\nProject updated successfully.");
            }, function (error) {
                console.log("\nError: " + error.response.message);
            });
        }
    }, function (error) {
        console.log("\nError: " + error.response.message);
    });
}

module.exports = {
    createProject, listProjects, projectAttributes, removeProject,
    updateProject, findProjectByName

};