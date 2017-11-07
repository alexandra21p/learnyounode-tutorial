const http = require( "http" );
const bl = require( "bl" );
const url = process.argv[2];

http.get( url, ( response ) => {
    
    response.pipe( bl( ( err, data ) => {
        if ( err ) {
            console.log( err.message );
        }
        const charCount = data.toString().length;
        console.log( charCount );
        console.log( data.toString() );
    } ) );

}).on( "error", ( err ) => console.log( err.message ) );
