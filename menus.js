const sequelize = require("./db");
const { DataTypes, Model } = require("sequelize");

class Menu extends Model {}

Menu.init(
    {
        name: DataTypes.STRING,

}, {
        sequelize,
        timestamps: false,
        modelName: "menu",
    }
)

module.exports = Menu;