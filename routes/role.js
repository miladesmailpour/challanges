const role = require("express").Router();
const db = require("../config/connection.js");

// Create a role
role.post("/", ({ body }, res) => {
  const sql = `INSERT INTO role (title, salary, department_id)
    VALUES (?, ?, ?)`;
  const params = [body.title, body.salary, body.department_id];

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

// Read all role
role.get("/", (req, res) => {
  const sql = `SELECT r.id, r.title, r.salary, d.name as department FROM role r join department d on d.id = r.department_id`;

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

// Delete a role
role.delete("/:id", (req, res) => {
  const sql = `DELETE FROM role WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.statusMessage(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "role not found",
      });
    } else {
      res.json({
        message: "deleted",
        changes: result.affectedRows,
        id: req.params.id,
      });
    }
  });
});

module.exports = role;
