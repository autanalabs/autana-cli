
const connect = require('./connect');
let _yargs = {};


function extended(yargs) {
    _yargs = yargs;

    yargs.foo = function() {
        console.log('FOO!!');
        return _yargs;
    };
    

    return yargs
}

module.exports = { connect, extended
};