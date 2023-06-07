const express = require("express");

// Import our modular routers for
const departmentRouter = require("./department");
const roleRouter = require("./role");

const app = express();

app.use("/department", departmentRouter);
app.use("/role", roleRouter);

module.exports = app;
