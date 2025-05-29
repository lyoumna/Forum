const db = require('./database');

async function getAllUsers() {
  return await db.all("SELECT id, username, role FROM users");
}

async function deleteUser(userId) {
  return await db.run("DELETE FROM users WHERE id = ?", [userId]);
}

async function getStats() {
  const users = await db.all("SELECT COUNT(*) AS count FROM users");
  const labyrinths = await db.all("SELECT COUNT(*) AS count FROM labyrinths");
  return {
    users: users[0].count,
    labyrinths: labyrinths[0].count
  };
}

module.exports = { getAllUsers, deleteUser, getStats };
