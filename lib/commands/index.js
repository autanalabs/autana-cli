
const yargsModule = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const connect = require('./connect');
const projects = require('./projects');
const rules = require('./rules');

let _yargs = {};

function yargs(argv) {
    _yargs = yargsModule(hideBin(argv));
    _yargs.addConnectCommand = () => connect.addCommand(_yargs);
    _yargs.addProjectsCommand = () => projects.addCommands(_yargs);
    _yargs.addRulesCommand = () => rules.addCommands(_yargs);
    _yargs.demandCommand(1, 'Provide a valida command');
    return _yargs;
}

module.exports = { yargs, connect
};