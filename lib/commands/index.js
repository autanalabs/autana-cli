
const yargsModule = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const credentials = require('../credentials');
const connect = require('./connect');
let _yargs = {};


function yargs(argv) {
    _yargs = yargsModule(hideBin(argv));

    _yargs.addConnectCommand = function() {
        
        _yargs.command('connect', 'Connect to Appwrite', (yargs) => {
            return yargs
                .option('endpoint', {
                    describe: 'Appwrite endpoint',
                    type: 'string',
                    default: 'https://cloud.appwrite.io/v1',
                })
                .option('project', {
                    describe: 'Appwrite project ID',
                    type: 'string',
                    demandOption: true,
                })
                .option('apikey', {
                    describe: 'Appwrite API key',
                    type: 'string',
                    demandOption: true,
                });
        }, (argv) => {
            credentials.saveCredentials(argv.endpoint, argv.project, argv.apikey);
        })

        return _yargs;
    };

    return _yargs;
}

module.exports = { connect, yargs
};