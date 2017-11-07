const listFiles = require("./utils");

const dirName = process.argv[2];
const fileExtension = process.argv[3];

listFiles( dirName, fileExtension, ( err, data ) => {
    if ( err ) {
        return console.log( err.message );
    }
    
    data.forEach( file => console.log( file ) );
});
