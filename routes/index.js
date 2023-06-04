// Import Routes
const userRoute = require("./user.route");

const allRoutes = (app) => {
  app.use("/api/v2/", userRoute);
};

module.exports = allRoutes;
