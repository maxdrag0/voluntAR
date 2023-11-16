import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class TipoSolicitud extends Model{

}

TipoSolicitud.init(
    {
      Nombre: {
        type: DT.STRING(10),
        allowNull: false,
      },
    },
    {
      sequelize: connection,
      modelName: "TipoSolicitud",
      timestamps: false,
    }
  );

  export default TipoSolicitud;