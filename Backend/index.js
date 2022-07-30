const express = require("express");
const fetch = require("node-fetch");

const app = express();

// to get rid of cors error while connecting to frontend
let cors = require("cors");
app.use(cors());

const port = process.env.PORT || 3000;

app.get("/",async (req, res)=>{
    const apiLink = "https://api.kanye.rest/";
    let quote =await fetch(apiLink);
    // console.log(await quote.json());
    res.json(await quote.json());
    // res.sendFile(__dirname+"/'public");
    // res.send();
})

app.listen(port, ()=>{
    console.log(`running on http://localhost:${port}`);
});
