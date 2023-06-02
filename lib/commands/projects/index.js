
const create = require('./create');
const list = require('./list');
const attributes = require('./attributes')
const remove = require('./remove');
const update = require('./update');
const use = require('./use');
const current = require('./current');

function addCommands(_yargs) {

    _yargs.command('project <command>', 'Project management', (yargs) => {
        return yargs

            .command('list', 'Get a list of project names', (yargs) => {
                return yargs; 
            }, list)

            .command('attributes <name>', 'Get attributes of a project', (yargs) => {
                return yargs
                .positional('name', {
                    description: 'A unique name to identify your project in the ApiGateway config',
                    type: 'string',
                });   
            }, attributes)

            .command('create <name>', 'Create a new project', (yargs) => {
                return yargs
                .positional('name', {
                    description: 'A unique name to identify your project in the ApiGateway config',
                    type: 'string',
                    required: true
                })
                .option('endpoint', {
                    description: 'A valid URL to an Appwrite project',
                    alias: 'e',
                    type: 'string',
                    required: false,
                    default: 'https://cloud.appwrite.io/v1'
                })
                .option('projectId', {
                    description: 'A valid Appwrite projectID',
                    alias: 'p',
                    type: 'string',
                    required: true
                })
                .option('apiKey', {
                    description: 'A valid Appwrite apiKey with permission in projectId@endpoint',
                    alias: 'k',
                    type: 'string',
                    required: true
                });     
            }, create)

            .command('update <name>', 'Update an existent project', (yargs) => {
                return yargs
                .positional('name', {
                    description: 'A unique name to identify your project in the ApiGateway config',
                    type: 'string',
                    required: true
                })
                .option('endpoint', {
                    description: 'A valid URL to an Appwrite project',
                    alias: 'e',
                    type: 'string',
                    required: false,
                    default: 'https://cloud.appwrite.io/v1'
                })
                .option('projectId', {
                    description: 'A valid Appwrite projectID',
                    alias: 'p',
                    type: 'string',
                    required: false
                })
                .option('apiKey', {
                    description: 'A valid Appwrite apiKey with permission in projectId@endpoint',
                    alias: 'k',
                    type: 'string',
                    required: false
                });  
            }, update)

            .command('remove <name>', 'Remove an existent project', (yargs) => {
                return yargs
                .positional('name', {
                    description: 'A unique name to identify your project in the ApiGateway config',
                    type: 'string',
                    required: true
                });
            }, remove)

            .command('use <name>', 'Set a project as default for next autana-cli execution', (yargs) => {
                return yargs
                .positional('name', {
                    description: 'The project name to set as default project',
                    type: 'string',
                    required: true
                });        
            }, use)

            .command('current', 'Get the current default project', (yargs) => {
                return yargs;
                    
            }, current);
            
            

    }, (argv) => {
    })
        .demandCommand(1, 'Provide a valida command');


    return _yargs;
};

module.exports = {
    addCommands
};