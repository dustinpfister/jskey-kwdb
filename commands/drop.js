let path = require('path'),
fs = require('fs');

exports.command = 'drop';
exports.describe = 'drop a database';
exports.builder = {
    // target database file path
    t: {
      default: false
    }
};
exports.handler = function (argv) {

    if(argv.t){
        
        fs.unlink(path.resolve(argv.t), (e)=> {
            
            if(e){
                
              console.log(e.message);
              
            }else{
                
                console.log('database droped');
            }
            
        });
    }
      
};
