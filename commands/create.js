let path = require('path'),
fs = require('fs'),
mkdirp = require('../lib/mkdirp.js');

exports.command = 'create';
exports.describe = 'create database command';
exports.builder = {
    // target folder to create the new database in
    t: {
      default: path.join( process.cwd(), '_kwdb')
    },
    // database name
    n: {
      default: 'db'
    }
};
exports.handler = function (argv) {

    let target = path.resolve(argv.t);
    
    mkdirp(target, (e)=>{
        
        if(e){
            console.log(e.message);
        }else{
            console.log('we have a target folder...');
            let json = JSON.stringify({
               dbName: argv.n,
               keywords:[]
            }),
            filePath = path.join(target, argv.n + '.json');
            
            fs.writeFile(filePath, json, 'utf8', (e) => {
                
                if(e){
                    console.log(e.message);
                }else{
                    console.log('new database at: ');
                    console.log(filePath);
                }
                
            })
        }
    });
    
};
