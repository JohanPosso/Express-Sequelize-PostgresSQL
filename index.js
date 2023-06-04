const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyparser = require("body-parser");
require("dotenv").config();
require("./database/conexion");

app.use(bodyparser.json());
app.get("/", (req, res) => {
  res.send("Raiz principal");
});

// Middleware
// const validateField = require("./middleware/validateField.middleware");

const userRoute = require("./routes/user.route");
app.use("/api/v2/", userRoute);

app.listen(port, () => {
  console.log("Server RUNNING IN PORT: " + port);
});
