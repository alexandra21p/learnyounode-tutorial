const fs = require('fs');
const path = require('path');

function listFiles( dirName, fileExtension, callback ) {
    fs.readdir( dirName, ( err, data ) => {
        if ( err ) {
            return callback( err );
        }

        const filteredList = data.filter( file => path.extname( file ) === "." + fileExtension );
        callback( null, filteredList );
    });
}

module.exports = listFiles;
