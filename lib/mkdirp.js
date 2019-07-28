let path = require('path'),
fs = require('fs');

module.exports = function (p, cb) {
    p = path.resolve(p);
    fs.mkdir(p, function (e) {
        if (!e) {
            cb(null);
        } else {
            if (e.code === 'ENOENT') {
                // if 'ENOENT' code error call mkdirp
                // again with the dirname of current dir
                mkdirp(path.dirname(p), function (e) {
                    if (e) {
                        cb(e);
                    } else {
                        mkdirp(p, cb);
                    }
                });
            } else {
                // folder exsists?
                if (e.code === 'EEXIST') {
                    cb(null);
                }else{
                  // else some other error happed
                  cb(e);
                }
            }
        }
    });
};
