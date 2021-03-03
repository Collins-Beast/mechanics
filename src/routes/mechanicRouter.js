const express = require("express");
const Router = express.Router();
const path = require("path");

Router.get("/", (req, res) => {
  // Return login form
  res.sendFile(path.join(__dirname, "../mechanic", "login.html"));
});

Router.get("/register", (req, res) => {
  // Return register form
  res.sendFile(path.join(__dirname, "../mechanic", "register.html"));
});
Router.post('/api/login', (req, res) => {
    // Login handler

})
Router.post('/api/register', (req,res) => {
    // Register handler
    
})
module.exports = Router;
