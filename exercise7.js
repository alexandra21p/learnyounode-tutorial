const http = require( "http" );
const url = process.argv[2];

http.get( url, ( response ) => {
    response.setEncoding( "utf8" ); // same as response.toString()
    response.on( "data", ( data ) => console.log( data ) )
    response.on( "error", ( err ) => console.log( err.message ) )
    //response.on( "end", () => console.log( "" ) );
}).on( "error", ( err ) => console.log( err.message ) );
