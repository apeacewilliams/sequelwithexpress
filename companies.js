const sequelize = require("./db");
const { DataTypes, Model } = require("sequelize");

class Company extends Model {}

Company.init(
    {
        name: DataTypes.STRING,
        logoURL: DataTypes.STRING,
    
}, {
        sequelize,
        timestamps: false,
        modelName: "company",
    }
)

module.exports = Company;