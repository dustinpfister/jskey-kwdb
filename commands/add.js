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
    
        // set defaults
        .then((db)=>{
            //console.log(db.value());
            //return db.defaults({dbName: argv.n,keywords:[]});
            return db.get('keywords').push({
                keyword: argv.k
            }).write();
        })
        .then(()=>{
           
            console.log('okay');
            
        });

/*        
        fs.readFile(target,'utf8', (e,data) => {
            
            if(e){
                
                console.log(e.message);
                
            }else{
                
                try{
                    
                    let db = JSON.parse(data);
                    db.keywords.push({
                        keyword: argv.k
                    });
                    
                    fs.writeFile(target,JSON.stringify(db), (e)=>{
                        
                        if(e){
                            
                            console.log(e.message);
                            
                        }else{
                            
                            console.log('database updated');
                            
                        }
                        
                    });
                    
                }catch(e){
                    
                    console.log(e.message);
                    
                }
            }
            
        });
     */   
    }else{
        
        console.log('need to give a target path to the database file and a keyword');
        
    }
      
};
