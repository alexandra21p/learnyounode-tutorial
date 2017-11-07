const http = require( "http" );
const url = require( "url" );
const port = process.argv[2];

const server = http.createServer( ( request, response ) => {
    const parsedUrl = url.parse( request.url, true );
    let responseData;
    let { query } = parsedUrl;
    let date = new Date( query.iso );

    if ( parsedUrl.pathname === "/api/parsetime" ) {
        responseData = parsetime( date );
    }
    if ( parsedUrl.pathname === "/api/unixtime" ) {
        responseData = unixtime( date );
    }

    response.writeHead( 200, { 'Content-Type': 'application/json' } );
    response.end( JSON.stringify( responseData ) );
} );

server.listen( port );


const parsetime = ( date ) => ({
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
});

const unixtime = ( date ) => ({
    unixtime: date.getTime()
});
