
const create = require('./create');
const list = require('./list');
const attributes = require('./attributes')

function addCommands(_yargs) {

    _yargs.command('project <command>', 'Project management', (yargs) => {
        return yargs
            .command('list', 'Get a list of project names', (yargs) => {
                return yargs;
                    
            }, list)
            .command('attributes', 'Get attributes of a project', (yargs) => {
                return yargs
                .option('name', {
                    description: 'A unique name to identify your project in the ApiGateway config',
                    alias: 'n',
                    type: 'string',
                });
                    
            }, attributes)
            .command('create', 'Create a new project', (yargs) => {
                return yargs
                .option('name', {
                    description: 'A unique name to identify your project in the ApiGateway config',
                    alias: 'n',
                    type: 'string',
                })
                .option('endpoint', {
                    description: 'A valid URL to an Appwrite project',
                    alias: 'e',
                    type: 'string',
                })
                .option('projectId', {
                    description: 'A valid Appwrite projectID',
                    alias: 'p',
                    type: 'string',
                })
                .option('apiKey', {
                    description: 'A valid Appwrite apiKey with permission in projectId@endpoint',
                    alias: 'k',
                    type: 'string',
                });
                    
            }, create)
            .command('update', 'Update an existent project', (yargs) => {
                return yargs
                .option('name', {
                    description: 'A unique name to identify your project in the ApiGateway config',
                    alias: 'n',
                    type: 'string',
                })
                .option('endpoint', {
                    description: 'A valid URL to an Appwrite project',
                    alias: 'e',
                    type: 'string',
                })
                .option('projectId', {
                    description: 'A valid Appwrite projectID',
                    alias: 'i',
                    type: 'string',
                })
                .option('apiKey', {
                    description: 'A valid Appwrite apiKey with permission in projectId@endpoint',
                    alias: 'k',
                    type: 'string',
                });
                    
            })
            .command('remove', 'Remove an existent project', (yargs) => {
                return yargs
                .option('name', {
                    description: 'A unique name to identify your project in the ApiGateway config',
                    alias: 'n',
                    type: 'string',
                });
                    
            })
            .command('use', 'Set a project as default for next autana-cli execution', (yargs) => {
                return yargs
                .option('name', {
                    description: 'A unique name to identify your project in the ApiGateway config',
                    alias: 'n',
                    type: 'string',
                });
                    
            })
            .command('get-current', 'Get the current default project', (yargs) => {
                return yargs;
                    
            });
            
            

    }, (argv) => {
       
    })
        .demandCommand(1, 'Debes proporcionar un comando válido')


    return _yargs;
};

module.exports = {
    addCommands
};