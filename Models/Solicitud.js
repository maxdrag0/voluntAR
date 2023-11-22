import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Solicitud extends Model {}

Solicitud.init(
  {
    Asunto: {
      type: DT.STRING(50),
      allowNull: false,
    },
    Tipo: {
      type: DT.INTEGER,
      validate: {
        notEmpty: true,
      },
    },
    IdUsuario: {
      type: DT.INTEGER,
      validate: {
        notEmpty: true,
      },
    },
    Direccion: {
      type: DT.STRING(50),
      validate: {
        notEmpty: true,
      },
    },
    Ciudad: {
      type: DT.STRING,
    },
    Descripcion: {
      type: DT.STRING(200),
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Solicitud",
    timestamps: false,
  }
);

export default Solicitud;
