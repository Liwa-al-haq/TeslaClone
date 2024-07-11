// const mongoose = require('mongoose')
// var ObjectId = mongoose.Schema.Types.ObjectId;
// const userOrder = new mongoose.Schema({
//     status: String,
//     model: String,
//     paint: String,
//     en_auto:String

// })
// const userSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true,
//     },
//     lastName: {type: String,
//         required: true,},
//     email: {type: String,
//         required: true,},
//     orders: 
//         [userOrder]
    
// })

// module.exports =mongoose.model('user',userSchema)
const { DataTypes } = require('sequelize');
const sequelize = require('..//config/sequelize-config');

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  orders: {
    type: DataTypes.ARRAY(DataTypes.JSONB)
  },
});

module.exports = User;
