import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class TipoUsuario extends Model{

}

TipoUsuario.init(
    {
      Nombre: {
        type: DT.STRING(10),
        allowNull: false,
      },
    },
    {
      sequelize: connection,
      modelName: "TipoUsuario",
      timestamps: false,
    }
  );

  export default TipoUsuario;