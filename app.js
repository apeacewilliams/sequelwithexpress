const setupDb = require("./setupDb")
const Company = require("./companies")
const Location = require("./locations")
const express = require("express");

const app = express();

app.use(express.json());

app.get("/companies", async (req,res) => {
    const companies = await Company.findAll();
    res.json(companies);
})

app.get("/companies/:id", async (req, res) => {
   const company = await Company.findByPk(req.params.id); 
   if (!company) {
       return res.sendStatus(400);
   }
   res.json(company)
})

app.post("/companies", async (req, res) => {
    const { name, logoURL } = req.body
    await Company.create({ name, logoURL });
    res.sendStatus(201);
});

app.post("/companies/:id/locations", async ( req, res ) => {
    const company = await Company.findByPk(req.params.id); 
    if (!company) {
        return res.sendStatus(400);
    }
    const { name, capacity, manager } = req.body;
    await company.createLocation({name, capacity, manager})
    res.sendStatus(201);
})

setupDb();

module.exports = app;