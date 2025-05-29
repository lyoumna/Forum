const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

const dbPromise = open({
  filename: './data.sqlite',
  driver: sqlite3.Database
});

async function setup() {
  const db = await dbPromise;
  await db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT,
    role TEXT DEFAULT 'user'
  )`);
}

setup();

module.exports = {
  get: async (...args) => (await dbPromise).get(...args),
  run: async (...args) => (await dbPromise).run(...args),
  all: async (...args) => (await dbPromise).all(...args)
};