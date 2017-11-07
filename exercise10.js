const net = require( "net" );


const server = net.createServer( ( socket ) => {
    const date = new Date();
    //  "YYYY-MM-DD hh:mm"
    const dateObjects = [];
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    dateObjects.push( month, day, hour, minutes );

    const modifiedFormats = dateObjects.map( item => item.toString().length == 1
        ? "0" + item : item );

    let dateFormat = `${date.getFullYear()}-${modifiedFormats[0]}-${modifiedFormats[1]} ${modifiedFormats[2]}:${modifiedFormats[3]}\n`;
    socket.end( dateFormat );
} );

server.listen( process.argv[2] );
