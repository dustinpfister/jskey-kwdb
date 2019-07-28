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

    if(argv.t && argv.k){


        let target = path.resolve(argv.t);
        
        fs.readFile(target,'utf8', (e,data) => {
            
            if(e){
                console.log(e.message);
            }else{
                try{
                    let db = JSON.parse(data);
                    db.keywords.push()
                }catch(e){
                    console.log(e.message);
                }
            }
            
        });
        
    }else{
        
        console.log('need to give a target path to the database file and a keyword');
        
    }
    
    //console.log(argv.t);
    //console.log(argv.k);    
};
