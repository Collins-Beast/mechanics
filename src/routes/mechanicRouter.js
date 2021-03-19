const express = require("express");
const Router = express.Router();
const path = require("path");

Router.get("/login", (req, res) => {
  // Return login form
  res.sendFile(path.join(__dirname, "../mechanic", "login.html"));
});

Router.get("/register", (req, res) => {
  // Return register form
  res.sendFile(path.join(__dirname, "../mechanic", "register.html"));
});

Router.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, "../mechanic", "home.html"))
})
Router.post("/api/login", (req, res) => {
  // Login handler
});

Router.post("/api/register", (req, res) => {
  // Register handler
});
module.exports = Router;