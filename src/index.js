const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const handlers = require("./routes/loginRoutes");
const path = require("path");
const mechanicRouter = require("./routes/mechanicRouter.js");
const morgan = require("morgan");

const { storeAppointment } = require("./controllers/mechanic");
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
    req.body.name = req.user.name
    req.body.contacts = req.user.phone
    console.log(req.body)
    let dateTime = new Date().toISOString().slice(0, 19).replace("T", " ");
    const appointment = {
      date_time: dateTime,
      services: req.body.typeOfService,
      brief_description: req.body.briefDescription,
      latitude: req.body.latitude,
      longtitude: req.body.longtitude,
      contacts: req.body.contacts,
      name: req.body.name,
      car_model: req.body.carModel,
      mechanic: req.body.mechanic,
    };
    storeAppointment(appointment,res)
//     {
//   name: 'mmmmm',
//   datetime: 'Tue Jun 01 2021 21:17:18 GMT+0300 (East Africa Time)',
//   typeOfService: 'Engine Transmission and mantainance',
//   carModel: 'mercedes',
//   briefDescription: '',
//   contacts: '0725558806',
//   mechanic: 'Jon Doe',
//   latitude: '-1.2877824',
//   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjA3MjU1NTg4MDYiLCJwYXNzd29yZCI6IjEyMzQ1IiwibmFtZSI6Im1tbW1tIiwiaWF0IjoxNjIyNTY5NjU1LCJleHAiOjE2MjI5Mjk2NTV9.IxcmECySlLbA66jU1tl7C59m83UcgeZB6fcAaCqXfs4'
// }
    res.send('success')
})
app.use(express.static(path.join(__dirname, "client")));
app.use(express.static(path.join(__dirname, "mechanic")));

app.use(router);

app.listen(8080, function(err) {
    if (err) throw err;
    console.log("Listening on: " + 8080);
});