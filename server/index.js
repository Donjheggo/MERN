const express = require("express");
const { connectDB } = require('./config/db')
const { errorHandler } = require('./middlewares/errorMiddleware');

require("dotenv").config();
require("colors");

// ROUTES IMPORT //
const goalRoutes = require("./routes/goalRoutes");

// INITIALIZE //
const app = express()
const PORT = process.env.PORT
connectDB();


// STACK MIDDLEWARE //
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
    console.log(`${req.method}: ${req.path}`)
    next();
});

// ROUTES //
app.use("/api/v1/goals", goalRoutes)

// ERROR HANDLER MIDDLEWARE //
app.use(errorHandler)


// SERVER LISTEN //
app.listen(PORT, () => {console.log(`Server running in PORT ${PORT}...`)})

