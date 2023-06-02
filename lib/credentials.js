
const fs = require('fs');
const path = require('path');
const credentialsPath = path.join(process.env.HOME, '.autana/appwrite.credentials');

function loadCredentials() {
    if (fs.existsSync(credentialsPath)) {
        const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf-8'));
        console.log("loadCredentials: credentials" + JSON.stringify(credentials));
        return credentials;
    } else {
        return null;
    }
}

function saveCredentials(endpoint, projectId, apiKey, database) {
    credentials = {
        endpoint,
        projectId,
        apiKey,
        database
    };
    
    let dir = path.dirname(credentialsPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(credentialsPath, JSON.stringify(credentials, null, 2), { flag: 'w' });

    console.log('Credentials saved successfully!');
}


module.exports = {
    credentialsPath, 
    loadCredentials, saveCredentials

};