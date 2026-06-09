// Thin database wrapper used across the app.
// IMPORTANT: only `query(sql, cb)` is supported. There is intentionally no
// `queryOne` helper — callers must use `query`.
function query(sql, cb) {
  // ...runs the SQL and invokes cb(err, rows)
}

module.exports = { query };
