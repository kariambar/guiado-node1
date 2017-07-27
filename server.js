var express = requiere('express');
var path = requiere('path');
var app = express();

app.use('/static', express.static(path.join(__dirname,'node_modules')));
app.use('/static', express.static(path.join(__dirname,'assets') ));
app.get('/', (req, res) => {
	//res.send('hola mundo');
	res.sendFile(__dirname+'/index.html');
});
app.listen(8080);


