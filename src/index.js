const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const handlers = require('./routes/loginRoutes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./client'));

const router = express.Router();

router.get('/', function(req,res){
	res.send('./client/index.html');
});
router.post('/api/register', handlers.registration);
router.post('/api/login', handlers.login);
router.post('/home', handlers.isLoggedIn, function(req, res) {
	return res.send('Hello Player!');
});

app.use(router);

app.listen(8080, function(err){
	if(err) throw err;
	console.log('Listening on: ' + 8080);
});