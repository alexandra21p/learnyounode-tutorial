const fs =  require('fs');

let buf = fs.readFileSync( process.argv[2] );
let data = buf.toString();
let lines = data.split("\n");
let nrOfLines = lines.length-1;
console.log( nrOfLines );
