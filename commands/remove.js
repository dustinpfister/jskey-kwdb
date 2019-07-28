let path = require('path'),
fs = require('fs');

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

        let target = path.resolve(argv.t);
        
        fs.readFile(target,'utf8', (e,data) => {
            
            if(e){
                
                console.log(e.message);
                
            }else{
                
                try{
                    
                    let db = JSON.parse(data);
                    
                    // remove
                    db.keywords = db.keywords.reduce((acc, rec, i, kw)=>{
                        
                        if(i === 1){
                            acc = acc.keyword === argv.k ? [] : [acc];
                        }
                        
                        if(rec.keyword != argv.k){
                            
                            acc.push(rec);
                            
                        }
                        
                        return acc;
                        
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
        
    }else{
        
        console.log('need to give a target path to the database file and a keyword');
        
    }
      
};
