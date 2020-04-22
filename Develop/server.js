const express = require("express");
const mongojs = require("./Develop/node_modules/mongojs");
const logger = require("morgan");
const path = require("path");

const PORT =  process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
