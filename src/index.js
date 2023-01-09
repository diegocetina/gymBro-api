const express = require("express");
const v1Exercise = require("./v1/routes/exerciseRoutes");

const app = express()
const PORT  = process.env.PORT || 2323

app.use("/api/v1/excersices", v1Exercise);

app.listen(PORT, ()=>{
    console.log(`API is working on port ${PORT}`)
})