
const rulesCollection = "rules";
const { getDatabase } = require('./common');

async function findRuleByCommandAndPath(projectId, actionId) {
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
    const rule = await findRuleByCommandAndPath(projectId, actionId);
    if (rule != null) {
        console.log("\nAttributes of rule: '" + actionId + "' for project '" + projectId + "': ");
        console.log(" - command: " + rule.command);
        console.log(" - path: " + rule.path);
        console.log(" - type: " + rule.actionType);
        console.log(" - operation: " + rule.operation);
        console.log(" - inboundTransform: " + rule.inboundTransform);
        console.log(" - outboundTransform: " + rule.outboundTransform);
    }
}

module.exports = {
    findRuleByCommandAndPath, listRules, ruletAttributes

}
