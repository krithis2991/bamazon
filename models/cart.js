module.exports = function (sequelize, DataTypes) {
    let Item = sequelize.define("Item", {
        product_name : {
            type: DataTypes.STRING
        },
        department_name : {
            type: DataTypes.STRING
        },
        price :{
            type:DataTypes.INTEGER
        }
    });

    Item.associate = function(models){
        Item.hasMany(models.Product,{
            onDelete: "cascade"
        });
    };
    return Item;

};