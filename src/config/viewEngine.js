import express from "express";

// var express = require("express");

let configViewEngine = (app) => {
    //arrow function
    app.use(express.static("./scr/public"));
    app.set("view engine", "ejs");
    app.set("views", "./src/views")
}
module.exports = configViewEngine;
