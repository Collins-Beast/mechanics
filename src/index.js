const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const handlers = require('./routes/loginRoutes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

const router = express.Router();

router.get('/', function(req,res){
	res.send({'message': 'Running'});
});
router.post('/api/register', handlers.registration);
router.post('/api/login', handlers.login);

app.use(router);

app.listen(8080, function(err){
	if(err) throw err;
	console.log('Listening on: ' + 8080);
});