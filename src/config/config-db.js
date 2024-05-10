require("dotenv").config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB, process.env.USER_DB, process.env.PASSW_DB, {
    host: process.env.HOST_DB,
    dialect: 'postgres'
});

module.exports = sequelize;