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
        
        low(new fileAsync(filePath))
        // check if the keyword is in all ready
        .then((db)=>{
            let q = db.get('keywords').find({keyword:argv.k}).value();
            if(q){
                return Promise.reject(new Error('keyword: ' + argv.k + ' is all ready in the database'));
            }
            return db;
        })
        // add keyword
        .then((db)=>{
            return db.get('keywords').push({
                keyword: argv.k
            }).write();
        })
        .then(()=>{
            console.log('keyword ' + argv.k + ' added.');
        })
        .catch((e)=>{
            console.warn(e.message);
        });

    }else{
        console.warn('need to give a target path to the database file and a keyword');
    }
};
