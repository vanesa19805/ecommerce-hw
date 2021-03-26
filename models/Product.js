// import important parts of sequelize library
const { Model, DataTypes, INTEGER, STRING, DECIMAL } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type:DatatTypes.DECIMAL,
      allowNull: false,
      // how to: Validates that the value is a decimal
      validate:{
        isDecimal:true,
      },
    },

    Stock: {
      type: DataType.INTEGER,
      allowNull: false,
      defaultValue:10,
      validate:{
        isNumeric: true,
      //how to: Validates that the value is a decimal
      },
    },
    category_id: {
      Type: DataType.INTEGER,
      refrences: {
        model: 'Category',
        key: 'id'
      },
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
