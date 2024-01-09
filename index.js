const express = require("express");
const { connection } = require("./config/connection");
const cors = require("cors");
const morgan = require("morgan");
const testRoutes = require("./routes/testRoutes");
const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobsRoute");
const cookieParser = require("cookie-parser");
require("express-async-errors");
const errorMiddleware = require("./middleware/errorMiddleware");
const app = express();

// connection to database

connection();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser())

// routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/job", jobRoutes);

//validation middelware
app.use(errorMiddleware);



const port =8000;

app.listen(port, () =>{
    console.log('Server Running');
});

