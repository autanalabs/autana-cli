
const rulesCollection = "rules";
const { getDatabase } = require('./common');

async function findRuleByProjectIdAndActionId(projectId, actionId) {
    const { databases, databaseName } = getDatabase();
    return databases.listDocuments(databaseName,
        rulesCollection, [
        'equal("projectId", ' + projectId + ')',
        'equal("actionId", ' + actionId + ')'
    ])
        .then(function (response) {
            if (response.total == 0) {
                console.log("\Rule not found.");
                return null;
            } else {
                return response.documents[0];
            }
        }, function (error) {
            console.log("\nError: " + error.response.message);
            return null;
        });
}

function listRules(projectId) {
    const { databases, databaseName } = getDatabase();
    const promise = databases.listDocuments(databaseName,
        rulesCollection, [
        'equal("projectId", ' + projectId + ')'
    ]);

    promise.then(function (response) {
        console.log("\Rule list for project: '" + projectId + "': ");
        response.documents.forEach((r) => {
            console.log(" - " + r.actionId);
        });

    }, function (error) {
        console.log("\nError: " + error.response.message);
    });
}

async function ruletAttributes(projectId, actionId) {
    const rule = await findRuleByProjectIdAndActionId(projectId, actionId);
    if (rule != null) {
        console.log("\nAttributes of rule: '" + actionId + "' for project '" + projectId + "': ");
        console.log(" - command: " + rule.command);
        console.log(" - path: " + rule.path);
        console.log(" - type: " + rule.actionType);
        console.log(" - operation: " + rule.operation);
        console.log(" - databaseId: " + rule.databaseId);
        console.log(" - collectionId: " + rule.collectionId);
        console.log(" - created At: " + rule.$createdAt);
        console.log(" - updated At: " + rule.$updatedAt);
        console.log(" - inboundTransform: " + rule.inboundTransform);
        console.log(" - outboundTransform: " + rule.outboundTransform);
        console.log(" - authorizationRule: " + rule.authorizationRule);
    }
}

function createRule(projectId, actionId, command, path,
    actionType, operation, databaseId, collectionId,
    inboundTransform, outboundTransform, authorizationRule) {
    const { databases, databaseName } = getDatabase();
    const data = {
        projectId: projectId,
        actionId: actionId,
        command: command,
        path: path,
        databaseId: databaseId,
        collectionId: collectionId,
        actionType: actionType,
        operation: operation,
        inboundTransform: inboundTransform,
        outboundTransform: outboundTransform,
        authorizationRule: authorizationRule
    };
    const promise = databases.createDocument(databaseName,
        rulesCollection, 'unique()', data);

    promise.then(function (response) {
        console.log("\nRule created successfully");
    }, function (error) {
        console.log("\nError: " + error.response.message);
    });
}

async function updateRule(projectId, actionId, command, path,
    actionType, operation, databaseId, collectionId,
    inboundTransform, outboundTransform, authorizationRule) {
    const rule = await findRuleByProjectIdAndActionId(projectId, actionId);
    if (rule != null) {
        const { databases, databaseName } = getDatabase();
        const data = {
            projectId: projectId,
            actionId: actionId,
            command: command || rule.command,
            path: path || rule.path,
            databaseId: databaseId || rule.databaseId,
            collectionId: collectionId || rule.collectionId,
            actionType: actionType || rule.actionType,
            operation: operation || rule.operation,
            inboundTransform: inboundTransform || rule.inboundTransform,
            outboundTransform: outboundTransform || rule.outboundTransform,
            authorizationRule: authorizationRule || rule.authorizationRule
        }
        const promise = databases.updateDocument(databaseName,
            rulesCollection, rule.$id, data);

        promise.then(function (response) {
            console.log("\nRule updated successfully");
        }, function (error) {
            console.log("\nError: " + error.response.message);
        });
    };



}

async function deleteRule(projectId, actionId) {
    const rule = await findRuleByProjectIdAndActionId(projectId, actionId);
    if (rule != null) {
        const { databases, databaseName } = getDatabase();
        const promise = databases.deleteDocument(databaseName,
            rulesCollection, rule.$id);

        promise.then(function (response) {
            console.log("\nRule deleted successfully");
        }, function (error) {
            console.log("\nError: " + error.response.message);
        });
    }
}

module.exports = {
    findRuleByCommandAndPath: findRuleByProjectIdAndActionId,
    listRules, ruletAttributes,
    createRule, updateRule, deleteRule

}
