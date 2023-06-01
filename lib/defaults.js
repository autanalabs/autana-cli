
const fs = require('fs');
const path = require('path');
const defaultsPath = path.join(process.env.HOME, '.autana/defaults');

let _defaults = {};
function loadDefaults() {
    if (fs.existsSync(defaultsPath)) {
        _defaults = JSON.parse(fs.readFileSync(defaultsPath, 'utf-8'));
    }
}

module.exports = { defaultsPath, loadDefaults,
    get defaults() {
        return Object.freeze(_defaults);
    }
};