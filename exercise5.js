const fs = require('fs');
const path = require('path');
const dirName = process.argv[2];
const fileExtension = `.${process.argv[3]}`;

fs.readdir( dirName, ( err, list ) => {
    if ( err ) {
        return console.log( err.message );
    }

    list
        .filter( file => path.extname( file ) === fileExtension )
        .map( file => console.log( file ) );
});
