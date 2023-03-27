const express = require("express");
const cors = require('cors');
const { errorHandler } = require('./middlewares/errorMiddleware');

require("dotenv").config();
require("colors");
require('./database');

// ROUTES IMPORT //
const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoutes")

// INITIALIZE //
const app = express()
const PORT = process.env.PORT

console.log(process.env.ORIGIN)

// STACK MIDDLEWARE //
app.use(cors({origin: process.env.ORIGIN}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
    console.log(`${req.method}: ${req.path}`)
    next();
});

// ROUTES //
app.use("/api/v1/goals", goalRoutes);
app.use("/api/v1/users", userRoutes);

// ERROR HANDLER MIDDLEWARE //
app.use(errorHandler)


// SERVER LISTEN //
app.listen(PORT, () => {console.log(`Server running in PORT ${PORT}...`)})

