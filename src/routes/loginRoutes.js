var mysql = require("mysql");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "collin_mechanic",
});

connection.connect(function (err) {
  if (!err) {
    return console.log("Database connection successfull");
  }
  return console.log("Error connecting to database!:  " + err.message);
});

const registration = async function (req, res) {
  const password = req.body.password;
  const salt = bcrypt.genSaltSync(10, "a");
  const encryptedPassword = await bcrypt.hash(password, salt);
  if (!req.body.email) {
    req.body.email = "";
  }
  let users = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    password: encryptedPassword,
  };
  let { phone } = users;
  connection.query(
    "SELECT * FROM user WHERE phone = ?",
    [phone],
    async function (err, results, fields) {
      if (results.length > 0) {
        return res.status(206).json({
          code: "206",
          success: "That phone number is already registered.",
        });
      }
    
  
  connection.query(
    "INSERT INTO user SET ?",
    users,
    function (error, results, fields) {
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
  });
};

const login = async function (req, res) {
  var phone = req.body.phone;
  var password = req.body.password;
  connection.query(
    "SELECT * FROM user WHERE phone = ?",
    [phone],
    async function (err, results, fields) {
      if (err) {
        return res.status(400).json({
          code: 400,
          failed: "An error occurred",
        });
      }
      const user = Object.values(JSON.parse(JSON.stringify(results)));
      req.body.name = user[0].name
      if (results.length > 0) {
        let comparison = await bcrypt.compare(password, results[0].password);
        if (comparison) {
          const token = jwt.sign(req.body, "SherlokH@lmes05Bakerst", {
            expiresIn: 360000,
          });
          res.status(200).json({ token: token, code: 200 });
        } else {
          res.json({
            code: 204,
            success: "Phone and password do not match",
          });
          return;
        }
      } else {
        return res.status(206).json({
          code: 206,
          success: "Phone does not exist",
        });
      }
    }
  );
};
const isLoggedIn = function (req, res, next) {
  let token = req.body.token;
  if (!token) {
    token = req.query.token;
  }
  if (!token) {
    return res.status(403).json({ error: "Please login first" });
  }
  jwt.verify(token, "SherlokH@lmes05Bakerst", function (err, decode) {
    if (err) {
      console.log(err.message);
      return res.status(403).json({ error: "Please login first" });
    }
    req.user = decode
    return next();
  });
};
module.exports = { registration, login, isLoggedIn };
