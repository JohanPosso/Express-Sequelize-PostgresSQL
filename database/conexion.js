const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DBNAME,
  process.env.USERDB,
  process.env.PASSWORDDB,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
