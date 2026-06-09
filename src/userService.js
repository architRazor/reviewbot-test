const { getUser } = require('../app');

// Loads the active user for a session.
// getUser MUST be a pure lookup — it must NOT mutate the users array,
// because we reuse the same array for the rest of the request.
function loadActiveUser(users, sessionId) {
  const user = getUser(users, sessionId);
  return user;
}

module.exports = { loadActiveUser };
