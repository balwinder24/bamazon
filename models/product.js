module.exports = function(sequelize, DataTypes) {
  const Product = sequelize.define('Product', {
    product_name: DataTypes.STRING,
    depart_name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  });
  return Product;
}