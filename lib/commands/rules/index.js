
const defaults = require('../../defaults');
const list = require('./list');
const attributes = require('./attributes')


// const create = require('./create');
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
            }, list)

            .command('attributes', 'Get attributes of a project rule', (yargs) => {
                return yargs
                .option('projectId', {
                    description: 'A valid Appwrite projectID',
                    alias: 'p',
                    type: 'string',
                    required: false,
                    default: currentDefaults.defaultProject
                })
                .option('actionId', {
                    description: 'The actionId of the rule',
                    alias: 'a',
                    type: 'string',
                    required: true
                });
            }, attributes);



    }, (argv) => {
    })
        .demandCommand(1, 'Provide a valida command');


    return _yargs;
};

module.exports = {
    addCommands
};