
const fs = require('fs');
const path = require('path');
const appwrite = require('./appwrite');

const credentialsPath = path.join(process.env.HOME, '.autana/appwrite.credentials');

function loadCredentials() {
    if (fs.existsSync(credentialsPath)) {
        const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf-8'));
        appwrite.client
            .setEndpoint(credentials.endpoint)
            .setProject(credentials.project)
            .setKey(credentials.apikey);
    }
}
function saveCredentials(endpoint, projectId, apiKey) {
    const credentials = {
        endpoint,
        projectId,
        apiKey,
    };

    appwrite.client
        .setEndpoint(credentials.endpoint)
        .setProject(credentials.project)
        .setKey(credentials.apikey);

    let dir = path.dirname(credentialsPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(credentialsPath, JSON.stringify(credentials, null, 2), { flag: 'wx' });

    console.log('Credentials saved successfully!');
}


module.exports = {
    credentialsPath, loadCredentials, saveCredentials

};