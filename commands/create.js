let pack = require('../package.json'),
path = require('path'),
mkdirp = require('../lib/mkdirp.js');

exports.command = 'create';
exports.describe = 'create database command';
exports.builder = {
    // target folder to create the new database in
    t: {
      default: path.join( process.cwd(), '_kwdb')
    },
    // name
    n: {
      default: 'db.json'
    }
};
exports.handler = function (argv) {

    mkdirp(path.resolve(argv.t), (e)=>{
        
        if(e){
            console.log(e.message);
        }else{
            console.log('we have a target folder...');
        }
    });
    
};
