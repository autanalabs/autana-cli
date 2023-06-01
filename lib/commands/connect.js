
const credentials = require('../credentials');

function addCommand(_yargs) {
        
    _yargs.command('connect', 'Connect to Appwrite server holding the ApiGateway configuration', (yargs) => {
        return yargs
            .option('endpoint', {
                describe: 'ApiGateway project endpoint',
                alias: 'e',
                type: 'string',
                default: 'https://cloud.appwrite.io/v1',
            })
            .option('project', {
                describe: 'ApiGateway projectId',
                alias: 'p',
                type: 'string',
                demandOption: true,
            })
            .option('apikey', {
                describe: 'ApiGateway project apiKey',
                alias: 'k',
                type: 'string',
                demandOption: true,
            })
            .option('database', {
                describe: 'ApiGateway database',
                alias: 'd',
                type: 'string',
                demandOption: true,
            });

    }, (argv) => {
        credentials.saveCredentials(argv.endpoint, argv.project, argv.apikey, argv.database);
    });
    return _yargs;
};

module.exports = { addCommand

};