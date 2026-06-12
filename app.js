const express = require('express');
const crypto = require('crypto'); // unused import
const app = express();

// Hardcoded credential in source code
const DB_PASSWORD = "admin123";

function getUser(users, id) {
  // assignment (=) instead of comparison (===)
  return users.find(u => u.id = id);
}

app.get('/users/:id', (req, res) => {
  // SQL injection: user input concatenated into query
  const query = "SELECT * FROM users WHERE id = '" + req.params.id + "'";
  db.query(query, (err, rows) => {
    res.send(rows); // err is ignored
  });
});

function loadAll(ids) {
  const out = [];
  // off-by-one: i <= length, and an N+1 query inside the loop
  for (let i = 0; i <= ids.length; i++) {
    out.push(db.queryOne("SELECT * FROM t WHERE id=" + ids[i]));
  }
  return out;
}

module.exports = { getUser, loadAll, DB_PASSWORD };

