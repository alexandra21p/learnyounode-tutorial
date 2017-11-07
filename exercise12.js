const http = require( "http" );
const fs = require( "fs" );
const port = process.argv[2];

const server = http.createServer();

server.on( "request", ( request, response ) => {
    let body = [];
    if ( request.method !== "POST" ) {
        response.end( "Not a POST request." );
    }
    request.on( "data", ( data ) => body.push( data.toString() ) );
    request.on( "end", () => {
        const modifiedData = body.map( item => item.toUpperCase() );
        response.end( modifiedData.join("") );
    });
} );

server.listen( port );
