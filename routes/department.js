const department = require("express").Router();
const db = require("../config/connection.js");

// Create a department
department.post("/", ({ body }, res) => {
  const sql = `INSERT INTO department (name)
    VALUES (?)`;
  const params = [body.department_name];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
    });
  });
});

// Read all department
department.get("/", (req, res) => {
  const sql = `SELECT id, name AS Department FROM department`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// Delete a department
department.delete("/:name", (req, res) => {
  const sql = `DELETE FROM department WHERE name = ?`;
  const params = [req.params.name];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.statusMessage(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "department not found",
      });
    } else {
      res.json({
        message: "deleted",
        changes: result.affectedRows,
        name: req.params.name,
      });
    }
  });
});

module.exports = department;
