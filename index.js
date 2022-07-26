require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const router = require("./app/router");

app.use(router);

app.listen(PORT,()=>{
    console.log("Serveur démarré");
});