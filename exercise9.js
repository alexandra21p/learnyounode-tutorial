const http = require( "http" );
const bl = require( "bl" );

const urls = [];
let count = 0;

for ( let i = 2; i < process.argv.length; i++) {
    const object = { url: process.argv[i], id: i };
    urls.push( object );
    geDataForUrl( object, urls, showInOrder );
}


function geDataForUrl( urlObject, urls, callback ) {
    http.get( urlObject.url, ( response ) => {
        response.pipe( bl( ( err, data ) => {
            if ( err ) {
                console.log( err.message );
            }

            urlObject.data = data.toString();
            count++;

            if ( count === process.argv.length - 2 ) {
                return callback( urls );
            }
        } ) );

    } ).on( "error", ( err ) => console.log( err.message ) );
}


function showInOrder( list ) {
    list
        .sort( ( item1, item2  ) => item1.id - item2.id )
        .forEach( item => console.log( item.data ) );
}
