const express = require("express");
const { connection} = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const testRoutes = require("./routes/testRoutes");
const authRoutes = require("./routes/authRoutes");
require("express-async-errors");

const app = express();

// connection to database

connection;

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);

const port =8000;

app.listen(port, () =>{
    console.log('Server Running');
});

