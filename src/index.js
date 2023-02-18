const express = require("express");
const bodyParser = require("body-parser");
const v1Exercise = require("./v1/routes/exerciseRoutes");

const app = express()
const PORT  = process.env.PORT || 2323

app.use(express.json()) // to receive the json data inside our controllers under req.body
//app.use(bodyParser.json()); ESTO ES DE UNA VERSION VIEJA 
app.use("/api/v1/excersices", v1Exercise);

app.listen(PORT, ()=>{
    console.log(`API is working on port ${PORT}`)
})