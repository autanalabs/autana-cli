
const defaults = require('../../defaults');
const list = require('./list');
const attributes = require('./attributes')
const create = require('./create');
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

            .command('attributes <actionId>', 'Get attributes of a project rule', (yargs) => {
                return yargs
                .option('projectId', {
                    description: 'A valid Appwrite projectID',
                    alias: 'p',
                    type: 'string',
                    required: false,
                    default: currentDefaults.defaultProject
                })
                .positional('actionId', {
                    description: 'The actionId of the rule',
                    type: 'string',
                    required: true
                });
            }, attributes)

            .command('create <actionId>', 'Create a new project rule', (yargs) => {
                return yargs
                .option('projectId', {
                    description: 'A valid Appwrite projectID',
                    alias: 'p',
                    type: 'string',
                    required: false,
                    default: currentDefaults.defaultProject
                })
                .positional('actionId', {
                    description: 'The actionId of the rule',
                    type: 'string',
                    required: true
                })
                .option('command', {
                    description: 'A HTTP Command',
                    alias: 'c',
                    type: 'string',
                    required: false,
                    default: 'GET'
                })
                .choices('command', ['GET', 'POST', 'PUT', 'DELETE'])
                .option('path', {
                    description: 'A valid REST path',
                    alias: 'P',
                    type: 'string',
                    required: true
                })
                /*
                .option('actionType', {
                    description: 'An Appwrite service target',
                    alias: 't',
                    type: 'string',
                    required: false,
                    default: 'DOCUMENT'
                })
                .choices('actionType', ['DOCUMENT', 'STORAGE', 'FUNCTION'])
                */

                .option('database-operation', {
                    description: 'A Database operation',
                    alias: 'do',
                    type: 'string',
                    required: false,
                    default: 'READ'
                })
                .choices('database-operation', ['READ', 'INSERT', 'UPDATE', 'DELETE'])
                .option('databaseId', {
                    description: 'A valid Appwrite DatabaseId',
                    alias: 'di',
                    type: 'string',
                    required: true
                })
                .option('collectionId', {
                    description: 'A valid Appwrite CollectionId',
                    alias: 'ci',
                    type: 'string',
                    required: true
                })
                .option('inbound-transform', {
                    description: 'A JSONata transform template for requests',
                    alias: 'it',
                    type: 'string',
                    required: false
                })
                .option('outbound-transform', {
                    description: 'A JSONata transform template for responses',
                    alias: 'ot',
                    type: 'string',
                    required: false
                });
            }, create);

    }, (argv) => {
    })
        .demandCommand(1, 'Provide a valida command');


    return _yargs;
};

module.exports = {
    addCommands
};