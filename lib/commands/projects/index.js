
const create = require('./create');

function addCommands(_yargs) {

    _yargs.command({
        command: 'project <command>',
        aliases: ['p'],
        describe: 'Project management',
        handler: (argv) => {
            console.log('Project..');
        }
    })
        .positional('command', {
            describe: 'project operation',
            type: 'string',
            choices: ['list', 'get-attributes', 'create', 'update', 'remove', 'use', 'get-current']
        })
        .option('name', {
            description: 'project name',
            alias: 'n',
            type: 'string',
        })
        .option('endpoint', {
            description: 'appwrite server endpoint',
            alias: 'e',
            type: 'string',
        })
        .option('projectId', {
            description: 'appwrite projectID',
            alias: 'i',
            type: 'string',
        })
        .option('apiKey', {
            description: 'appwrite project apiKey',
            alias: 'k',
            type: 'string',
        })
        
        ;

    return _yargs;
};

module.exports = {
    create,
    addCommands
};