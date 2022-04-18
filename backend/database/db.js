import { Sequelize } from "sequelize";

const db = new Sequelize("abst", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
