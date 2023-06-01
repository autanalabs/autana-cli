
const yargsModule = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const connect = require('./connect');
let _yargs = {};


function yargs(argv) {
    _yargs = yargsModule(hideBin(argv));

    _yargs.foo = function() {
        console.log('FOO!!');
        return _yargs;
    };

    return _yargs;
}

module.exports = { connect, yargs
};