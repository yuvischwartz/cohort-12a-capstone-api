const {Sequelize, DataTypes, Model} = require('sequelize');
const {sequelize} = require('../lib/db'); //importing the connection from db.js
// ORM


//-----------User-----------//
class User extends Model {

}

User.init({
    // Model attributes are defined here
    email: {
        type: 'LONGTEXT',
    },
    password: {
        type: 'LONGTEXT',
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
});

//-----------Category-----------//
class Category extends Model {

}
Category.init({
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Category', // We need to choose the model name
});

//-----------Question-----------//
class Question extends Model {

}
Question.init({
    // Model attributes are defined here
    questionTxt: {
        type: 'LONGTEXT',
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Question' // We need to choose the model name
});

// Category.hasMany(Question, {foreignKey: 'categoryId'});
// Question.belongsTo(Category, {foreignKey: 'categoryId'});

sequelize.sync({ alter: true }); //this row will sync the data with my sql

module.exports = {
    Category, Question, User
};




