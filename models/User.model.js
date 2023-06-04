const { DataTypes } = require("sequelize");
const sequelize = require("../database/conexion");

const User = sequelize.define(
  "User",
  {
    identifier: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,

    createdAt: "createdAt",

    updatedAt: "updatedAt",
  }
);

module.exports = User;
