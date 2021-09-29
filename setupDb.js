const sequelize = require("./db");
const Company = require("./companies");
const Location = require("./locations");
const Menu = require("./menus");

async function setupDb() {
    Company.hasMany(Location);
    Company.hasMany(Menu);
    Menu.belongsTo(Company);
    Location.belongsTo(Company);
    await sequelize.sync({force: true});
}

module.exports = setupDb;