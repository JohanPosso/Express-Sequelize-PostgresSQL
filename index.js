const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyparser = require("body-parser");
require("dotenv").config();
require("./database/conexion");

app.use(bodyparser.json());

const allRoutes = require("./routes/index");
allRoutes(app);

app.listen(port, () => {
  console.log("Server RUNNING IN PORT: " + port);
});
