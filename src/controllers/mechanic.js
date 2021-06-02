var mysql = require("mysql");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { connect } = require("../routes/mechanicRouter");

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "",
    database: "collin_mechanic",
});

connection.connect(function(err) {
    if (!err) {
        return console.log("Database connection successfull");
    }
    return console.log("Error connecting to database!:  " + err.message);
});

const registration = async function(req, res) {
    const password = req.body.password;
    const salt = bcrypt.genSaltSync(10, "a");
    const encryptedPassword = await bcrypt.hash(password, salt);

    let users = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: encryptedPassword,
        licence: req.body.password,
        location: req.body.location,
        latitude: req.body.lattitude,
        longitude: req.body.longitude,
    };
    let { phone } = users;
    connection.query(
        "SELECT * FROM mechanics WHERE phone = ?", [phone],
        async function(err, results, fields) {
            if (results.length > 0) {
                return res.status(206).json({
                    code: "206",
                    success: "That phone number is already registered.",
                });
            }
        }
    );
    connection.query(
        "INSERT INTO mechanics SET ?",
        users,
        function(error, results, fields) {
            if (error) {
                console.log(error);
                return res.send({
                    code: 400,
                    failed: "An unknown error occurred",
                });
            }
            return res.status(200).json({
                code: 200,
                success: "User registered successfully",
            });
        }
    );
};

const login = async function(req, res) {
    console.log(req.body);
    var license = req.body.license;
    var password = req.body.password;
    connection.query(
        "SELECT * FROM mechanics WHERE licence = ?", [license],
        async function(err, results, fields) {
            try {
                if (err) {
                    return res.status(400).json({
                        code: 400,
                        failed: "An error occurred",
                    });
                }
                console.log(results);
                if (results.length > 0) {
                    let comparison = await bcrypt.compare(password, results[0].password);
                    req.body.name = results[0].name;
                    if (comparison) {
                        const token = jwt.sign(req.body, "SherlokH@lmes05Bakerst", {
                            expiresIn: 360000,
                        });
                        let name = results[0].name;
                        res.status(200).json({ token: token, name, code: 200 });
                    }
                    return res.json({
                        code: 204,
                        success: "License and password do not match",
                    });
                } else {
                    return res.status(206).json({
                        code: 206,
                        success: "That license does not exist",
                    });
                }
            } catch (error) {
                console.log(error);
            }
        }
    );
};
const getName = async function(req, res) {
    try {
        let { token } = req.body;
        let decoded = await jwt.verify(token, "SherlokH@lmes05Bakerst");
        console.log(decoded);
        if (decoded) {
            return res.json({ name: decoded.name });
        } else {
            return res.json({ name: "" });
        }
    } catch (error) {
        console.log(error);
        res.json({ name: "" });
    }
};

function getMechanics(req, res) {
    connection.query(`SELECT name,location,phone FROM mechanics`, function(error, result, info) {
        if (error) {
            console.log(error.message);
            return res.json({ success: false });
        }
        return res.json(result);
    });
}
function getDetails(req, res) {
  connection.query(`SELECT * FROM orders`,
    function (error, result, info) {
      if (error) {
        console.log(error.message);
        return res.json({ success: false });
      }
      console.log(result);
      return res.json(result);
    }
  );
}
function storeAppointment (req, res){
    let appointment= req ;
    connection.query(
      "INSERT INTO order_to_mechanic SET ?",
      appointment,
      function (error, results, fields) {
        if (error) {
          console.log(error);
          
        }
     } )

      
    
         
}
module.exports = { registration, login, getName, getMechanics, storeAppointment };