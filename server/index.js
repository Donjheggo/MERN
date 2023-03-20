const express = require("express");
require("dotenv").config();

// ROUTES IMPORT //
const goalRoutes = require("./routes/goalRoutes")

// INITIALIZE //
const app = express()
const PORT = process.env.PORT

// MIDDLEWARES //
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
    console.log(`${req.method}: ${req.path}`)
    next();
})


// SERVER LISTEN //
app.listen(PORT, () => {console.log(`Server running in PORT ${PORT}...`)})

// ROUTES //
app.use("/api/v1/goals", goalRoutes)

