
const fs = require('fs');
const path = require('path');
const defaultsPath = path.join(process.env.HOME, '.autana/defaults');

function loadDefaults() {
    if (fs.existsSync(defaultsPath)) {
        return JSON.parse(fs.readFileSync(defaultsPath, 'utf-8'));
    } else {
        return null;
    }
}

function saveDefaults(defaults) {
    let dir = path.dirname(defaultsPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(defaultsPath, JSON.stringify(defaults, null, 2), { flag: 'w' });
}

module.exports = { defaultsPath, loadDefaults, saveDefaults
    
};