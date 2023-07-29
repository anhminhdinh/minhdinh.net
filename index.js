var fs = require( 'fs' );
var https = require( 'https' );
var privateKey = fs.readFileSync( 'certificates/minhdinh.key' );
var certificate = fs.readFileSync( 'certificates/www_minhdinh_net.crt' );

var credentials = { key: privateKey, cert: certificate };
var express = require( 'express' );
var app = express();
var https_port = 443;
app.use( '/', express.static( './' ) );

var httpsServer = https.createServer( credentials, app );

httpsServer.listen( https_port, () =>
{
	console.log( `minhdinh.net HTTPS app listening on port ${ https_port }` )
} );
