const express = require("express");

// Import our modular routers for
const departmentRouter = require("./department");

const app = express();

app.use("/department", departmentRouter);

module.exports = app;
