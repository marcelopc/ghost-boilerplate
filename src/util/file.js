'use strict';

const fs = require('fs');

exports.moveFile = function(oldPath, newPath, callback) {

    let dir = newPath.substring(0, newPath.lastIndexOf('/'));

    if (!fs.existsSync(dir)){

        let split = dir.split('/');
        let diretorio = split.slice(1, split.length);
        let completDir = '.';

        for (let i = 0; i < diretorio.length; i++) {
            completDir += '/' + diretorio[i];
            if (!fs.existsSync(completDir)){
                fs.mkdirSync(completDir);
            }
        }
    }


    fs.rename(oldPath, newPath, function (err) {
        if (err) {

            if (err.code === 'EXDEV') {
                copy();
            } else {
                if(callback){
                  callback(err);
                }
            }
            return;
        }
        if(callback){
          callback();
        }
    });

    function copy() {
        var readStream = fs.createReadStream(oldPath);

        var writeStream = fs.createWriteStream(newPath);

        readStream.on('error', callback);
        writeStream.on('error', callback);

        readStream.on('close', function () {
            fs.unlink(oldPath, callback);
        });

        readStream.pipe(writeStream);
    }
};
