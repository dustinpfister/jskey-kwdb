let path = require('path');

// lowdb
let fileAsync = require('lowdb/adapters/FileAsync'),
low = require('lowdb'); 

// fs and mkdirp
let fs = require('fs'),
mkdirp = require('../lib/mkdirp.js');

exports.command = 'create';
exports.describe = 'create database command';
exports.builder = {
    // target folder to create the new database in
    t: {
        default: './db.json'
    },
    // database name
    n: {
      default: 'db'
    }
};
exports.handler = function (argv) {

    // make given target file path absolute
    let filePath = path.resolve(argv.t);

    // use the Async adapter
    low(new fileAsync(filePath))
    
    // set defaults
    .then((db)=>{
        console.log(db.value());
        return db.defaults({dbName: argv.n,keywords:[]});
    })
    // defaults
    //.defaults({dbName: argv.n,keywords:[]})
    // write
    //.write()
    .then((db)=>{
        
        console.log(db.value());
        return db.write();
        
    })
    // log to console
    .then((db)=>{
        //console.log(db.value());
        console.log(db);
        console.log('new database at: ');
        console.log(filePath);        
    })
    // if error
    .catch((e)=>{
        console.warn(e.message);
    });
    
};
