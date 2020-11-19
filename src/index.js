const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const handlers = require('./routes/loginRoutes');
const path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('C:/Users/Troll/Desktop/collin-gas/src/client/'));

const router = express.Router();

router.get('/', function(req,res){
	res.sendFile('C:/Users/Troll/Desktop/collin-gas/src/client/index.html');
});
router.get('/register', function(req, res) {
	res.sendFile('C:/Users/Troll/Desktop/collin-gas/src/client/register.html');
});
router.post('/api/register', function(req,res,next) {
	next();
}, handlers.registration);
router.post('/api/login',  function(req, res, next){
	//console.log(req.body);
	next();
}, handlers.login);
router.get('/home', handlers.isLoggedIn, function(req, res) {
	return res.sendFile('C:/Users/Troll/Desktop/collin-gas/src/client/home.html');
});

app.use(router);

app.listen(8080, function(err){ 
	if(err) throw err;
	console.log('Listening on: ' + 8080);
});