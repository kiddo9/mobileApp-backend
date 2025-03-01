// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/db');

// const User = sequelize.define('User', {
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   LastName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true, // Ensure email is unique
//     validate: {
//       isEmail: true, // Ensure email format is correct
//     },
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   Gender: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// }, {
//   timestamps: true, // Adds createdAt and updatedAt columns
//   tableName: 'Users' // Optional: specify the table name
// });

// module.exports = User