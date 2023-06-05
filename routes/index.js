// Import Routes
const userRoute = require("./user.route");
const uploadData = require("./uploadImage.route");

const allRoutes = (app) => {
  app.use("/api/v2/", userRoute);
  app.use("/api/v2/", uploadData);
};

module.exports = allRoutes;
