let path = require('path');
// lowdb
let fileAsync = require('lowdb/adapters/FileAsync'),
low = require('lowdb'); 

exports.command = 'remove';
exports.describe = 'remove a keyword to a database';
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
    if(argv.t && argv.k){
        let filePath = path.resolve(argv.t);
        low(new fileAsync(filePath))
        // check if the keyword is there and remove if it is
        .then((db)=>{
            let k = db.get('keywords'),
            q = k.find({keyword:argv.k});
            if(q.value()){
                return k.remove({keyword:argv.k}).write();
            }
            return Promise.reject(new Error('keyword: ' + argv.k + ' not found.'));
        })
        .then(()=>{
            console.log('keyword ' + argv.k + ' removed.');
        })
        .catch((e)=>{
            console.warn(e.message);
        });
    }else{
        console.warn('need to give a target path to the database file and a keyword');
    }
};
