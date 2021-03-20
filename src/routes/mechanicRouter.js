const express = require("express");
const Router = express.Router();
const path = require("path");
const { registration, login } = require("../controllers/mechanic");

Router.get("/login", (req, res) => {
  // Return login form
  res.sendFile(path.join(__dirname, "../mechanic", "login.html"));
});

Router.get("/register", (req, res) => {
  // Return register form
  res.sendFile(path.join(__dirname, "../mechanic", "register.html"));
});

Router.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../mechanic", "home.html"));
});

// Mechanic login
// mechanic/api/login
// parameters license
Router.post(
  "/api/login",
  (req, res, next) => {
    // Login handler
    next();
  },
  login
);

// Mechanic register
// mechanic/api/register
Router.post(
  "/api/register",
  (req, res, next) => {
    // Register handler
    console.log(req.body);
    next();
  },
  registration
);
module.exports = Router;