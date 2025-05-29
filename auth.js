const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./database');
const SECRET = 'mon_secret_super_secure';

async function registerUser(username, password) {
  const hashed = await bcrypt.hash(password, 10);
  try {
    await db.run("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashed]);
    return true;
  } catch (err) {
    return false;
  }
}

async function loginUser(username, password) {
  const user = await db.get("SELECT * FROM users WHERE username = ?", [username]);
  if (!user) return null;
  const match = await bcrypt.compare(password, user.password);
  if (match) {
    return jwt.sign({ id: user.id, username: user.username, role: user.role }, SECRET);
  }
  return null;
}

module.exports = { registerUser, loginUser };
