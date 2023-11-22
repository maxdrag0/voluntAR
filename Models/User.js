import { DataTypes as DT, Model } from "sequelize";
import bcrypt from "bcrypt";
import connection from "../connection/connection.js";

class User extends Model {
  validatePassword = async (myPlaintextPassword) => {
    const validate = await bcrypt.hash(myPlaintextPassword, this.salt);
    return validate === this.password;
  };
}

User.init(
  {
    Nombre: {
      type: DT.STRING(50),
      allowNull: false,

      set(value) {
        this.setDataValue("name", value.toUpperCase());
      },
    },
    Apellido: {
      type: DT.STRING(50),
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
    Email: {
      type: DT.STRING,
      validate: {
        isEmail: {
          msg: "Tiene que tener formato de email",
        },
        notEmpty: {
          msg: "no puede estar vacio",
        },
      },
    },
    TipoUsuario: {
      type: DT.INTEGER,
      validate: {
        notEmpty: true,
      },
    },
    Contraseña: {
      type: DT.STRING,
      validate: {
        notEmpty: true,
      },
    },
    Salt: {
      type: DT.STRING,
    },
  },
  {
    sequelize: connection,
    modelName: "User",
    timestamps: false,
  }
);

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt();
  user.salt = salt;

  const passwordHash = await bcrypt.hash(user.password, salt);
  user.password = passwordHash;
});

export default User;
