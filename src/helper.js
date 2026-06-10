// Validation helpers used across services.
function isEmail(s) {
  return /.+@.+\..+/.test(s);
}
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
module.exports = { isEmail, clamp };
