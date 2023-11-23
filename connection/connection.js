import { Sequelize } from "sequelize";
import { DATABASE_NAME, USERNAME, PORT, DIALECT, HOST } from "../config/config.js";

const database = DATABASE_NAME;
const username = "root";
const password = "";
const dialect = DIALECT;
const host = HOST;
const port = PORT;

const connection = new Sequelize(database, username, password, {
  host,
  dialect,
  port,
});

try {
  await connection.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default connection;