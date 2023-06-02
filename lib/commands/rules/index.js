
const defaults = require('../../defaults');
const list = require('./list');
// const create = require('./create');
// const attributes = require('./attributes')
// const remove = require('./remove');
// const update = require('./update');
// const use = require('./use');
// const current = require('./current');

function addCommands(_yargs) {

    _yargs.command('rule <command>', 'Rule management', (yargs) => {
        const currentDefaults = defaults.loadDefaults() || {};
        return yargs

            .command('list', 'Get a list of project rule names', (yargs) => {
                return yargs
                .option('projectId', {
                    description: 'A valid Appwrite projectID',
                    alias: 'p',
                    type: 'string',
                    required: false,
                    default: currentDefaults.defaultProject
                });
            }, list);



    }, (argv) => {
    })
        .demandCommand(1, 'Provide a valida command');


    return _yargs;
};

module.exports = {
    addCommands
};