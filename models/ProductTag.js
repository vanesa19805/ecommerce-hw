const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id:{
      type: DataType.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement: true,
    },
    product_id:{
      type: DataType.INTEGER,
      reference:{
        model:'Product',
        Key: 'id'
      },
    },
    tag_id:{
      type:DataType.INTEGER,
      reference:{
        model:'Tag',
        key:'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
