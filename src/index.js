const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const handlers = require("./routes/loginRoutes");
const path = require("path");
const mechanicRouter = require("./routes/mechanicRouter.js");
const morgan = require("morgan");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(
    morgan("dev", {
        skip: function(req, res) {
            return res.statusCode < 400;
        },
    })
);
app.use(express.static(path.join(__dirname, "mechanic")));
app.use(express.static(path.join(__dirname, "client")));
const router = express.Router();

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
router.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "client", "login.html"));
});
router.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "client", "register.html"));
});

app.use("/mechanic", mechanicRouter);
router.post(
    "/api/register",
    function(req, res, next) {
        next();
    },
    handlers.registration
);
router.post(
    "/api/login",
    function(req, res, next) {
        //console.log(req.body);
        next();
    },
    handlers.login
);

router.get("/home", handlers.isLoggedIn, function(req, res) {
    return res.sendFile(path.join(__dirname, "client", "home.html"));
});


// Saving customer appointments
router.post('/appointment', handlers.isLoggedIn, function(req,res){
    console.log(req.user)
    res.send('success')
})
app.use(express.static(path.join(__dirname, "client")));
app.use(express.static(path.join(__dirname, "mechanic")));

app.use(router);

app.listen(8080, function(err) {
    if (err) throw err;
    console.log("Listening on: " + 8080);
});