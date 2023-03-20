const express = require("express");
const { errorHandler } = require('./middlewares/errorMiddleware')
require("dotenv").config();

// ROUTES IMPORT //
const goalRoutes = require("./routes/goalRoutes")

// EXAMPLE //
const app = express()
const PORT = process.env.PORT

// EXAMPLE //
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
    console.log(`${req.method}: ${req.path}`)
    next();
})

// ROUTES //
app.use("/api/v1/goals", goalRoutes)


app.use(errorHandler)


// SERVER LISTEN //
app.listen(PORT, () => {console.log(`Server running in PORT ${PORT}...`)})

