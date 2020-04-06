const Sequelize = require('sequelize');
var sequelize = require('../config/connection.js');

var Todo = sequelize.define("todos", {
    text:{
        type: DataTypes.STRING
    },
    complete:{
        type: DataTypes.BOOLEAN
    },
});

Todo.sync();
 
module.exports = Todo;