module.exports = function (sequelize, DataTypes) {
    let Product = sequelize.define("Product", {
        product_name : {
            type: DataTypes.STRING
        },
        department_name : {
            type: DataTypes.STRING
        },
        price :{
            type:DataTypes.INTEGER
        },
        stock_quantity : {
            type: DataTypes.INTEGER
        }
    });

    Product.associate = function(models){
        Product.belongsTo(models.Item, {
            foreignKey:{
                allowNull : false
            }
        });
    };
    return Product;
}