
function addCommand(_yargs) {
    _yargs.command('create', 'Create a new project', (yargs) => {
        return yargs
            .option('endpoint', {
                describe: 'Project endpoint',
                type: 'string',
                demandOption: true,
            })
            .option('project', {
                describe: 'Project ID',
                type: 'string',
                demandOption: true,
            })
            .option('apikey', {
                describe: 'API key',
                type: 'string',
                demandOption: true,
            });
    }, (argv) => {
        console.log('Project created.');
    });
    return _yargs;
};

module.exports = { addCommand

};