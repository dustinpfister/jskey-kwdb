let path = require('path'),
fs = require('fs');

exports.command = 'add';
exports.describe = 'add a keyword to a database';
exports.builder = {
    // target database file path
    t: {
      default: false
    },
    k: {
      default: false
    }
};
exports.handler = function (argv) {

    //let target = path.resolve(argv.t);
    
    console.log(argv.t);
    console.log(argv.k);    
};
