// importamos la conexion a la DB
import db from "../database/db.js";
// Importamos sequelize
import { DataTypes } from "sequelize";

const ClubModel = db.define("clubes", {
  nombre: { type: DataTypes.STRING },
  domicilio: { type: DataTypes.STRING },
});

export default ClubModel;
