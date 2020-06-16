//Install express server
var express = require('express');
var path = require('path');
var multer = require('multer');
var bodyParser = require('body-parser');

var app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/hello-app'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/hello-app/index.html'));
});

// //File Upload Settings
// var storage = multer.diskStorage({
// 	destination: (req, file, cb) => {
// 		cb(null, './uploads')
// 	},
// 	filename: (req, file, cb) => {
// 		const suffix = '-' + Date.now() + '.pdf'
// 		cb(null, file.fieldname + suffix)
// 	}
// });

// var upload = multer({
//   storage: storage
// });

// Start the app by listening on the default Heroku port
var PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log('Connected to port ' + PORT)
});