let path = require('path'),
fs = require('fs');

// lowdb
let fileAsync = require('lowdb/adapters/FileAsync'),
low = require('lowdb'); 

exports.command = 'add';
exports.describe = 'add a keyword to a database';
exports.builder = {
    // target database file path
    t: {
      default: false
    },
    // keyword to add
    k: {
      default: false
    }
};
exports.handler = function (argv) {

    if(argv.t && argv.k){

        let filePath = path.resolve(argv.t);
        
        console.log(argv.t, argv.k);
        
        low(new fileAsync(filePath))
    
        // add keyword
        .then((db)=>{
            return db.get('keywords').push({
                keyword: argv.k
            }).write();
        })
        .then(()=>{
           
            console.log('keyword ' + argv.k + ' added.');
            
        });

    }else{
        
        console.warn('need to give a target path to the database file and a keyword');
        
    }
      
};
