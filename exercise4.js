const fs = require('fs');

fs.readFile( process.argv[2], ( err, data ) => {
    if ( err ) {
        return console.log( `There was an error: ${err.message}` );
    }
    let lines = data.toString().split("\n");
    let count = lines.length - 1;
    console.log( count );
});
