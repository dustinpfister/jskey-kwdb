let path = require('path');
// lowdb
let fileAsync = require('lowdb/adapters/FileAsync'),
low = require('lowdb'); 

exports.command = 'weight';
exports.describe = 'figure weight for a post';
exports.builder = {
    // target database file path to use
    t: {
      default: false
    },
    // keyword to use
    k: {
      default: ''
    },
    s: {
      default : path.join(__dirname, 'term_freq.js')
    }
};
exports.handler = function (argv) {

    if(!argv.t && !argv.k){
        console.warn('must give a single keyword with -k option or a database to use via -t option');
        console.warn('must also supply text via the standard input.');
    }
    
    
    let weightFunction = require(path.resolve(argv.s));
    
    let text = '';
    process.stdin.on('data', (data) => {
        
        text += data.toString();
        
    });
    
    process.stdin.on('end', () => {
        
        console.log(weightFunction(text, argv.k));
        
    });
};
