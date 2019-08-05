let path = require('path');
// lowdb
let fileAsync = require('lowdb/adapters/FileAsync'),
low = require('lowdb'); 

exports.command = 'search';
exports.describe = 'search keyword database';
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
        
        .then((db)=>{
            
            let q = db.get('keywords').find({keyword: argv.k}).value();
            if(q){
                console.log(q);
            }else{
                console.log('keyword \"' + argv.k + '\" not found in the database.');
            }
            
        })
        
    }else{
        console.warn('need to give a target path to the database file and a keyword');
    }
};
