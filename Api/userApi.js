import User from "../Models/User.js";
import validaciones from "../utils/validaciones.js";

class UserApi {
  getAllUser = async () => {
    const user = await User.findAll({ attributes: ["Id", "Nombre"] });
  };

  getUserById = async (id) => {
    if (validaciones.esNumeroEntero(id)) {
      const user = await User.findOne({
        where: { id },
        attributes: ["id", "Nombre"],
      });
      if (!user) throw new Error("no hay User");
    } else {
      console.log("Tipo de dato invalido");
    }
  };

  createUser = async (
    Nombre,
    Apellido,
    Direccion,
    Email,
    TipoUsuario,
    Contraseña
  ) => {
    if (
      validaciones.esString(Nombre) &&
      validaciones.esString(Apellido) &&
      validaciones.esString(Direccion) &&
      validaciones.esString(Email) &&
      validaciones.esNumeroEntero(TipoUsuario) &&
      validaciones.esString(Contraseña)
    ) {
      const user = await User.create({
        Nombre,
        Apellido,
        Direccion,
        Email,
        TipoUsuario,
        Contraseña,
      });
    } else {
      console.log("Tipo de dato invalido");
    }
  };

  updateUser = async (Nombre, Id) => {
    if (validaciones.esString(Nombre) && validaciones.esNumeroEntero(Id)) {
      const user = await User.update(
        { Nombre },
        {
          where: { Id },
        }
      );
      if (user[0] === 0) throw new Error("no se modifico nada");
    } else {
      console.log("Tipo de dato invalido");
    }
  };

  deleteUser = async (id) => {
    if (validaciones.esNumeroEntero(id)) {
      const user = await User.destroy({
        where: { id },
      });

      if (!user) throw new Error("No se pudo eliminar");
    } else {
      console.log("Tipo de dato invalido");
    }
  };

  login = async (Email, Contraseña) => {
    if (validaciones.esEmail(Email) && validaciones.esString(Contraseña)) {
      const user = await User.findOne({
        where: { Email },
      });
      if (!user) throw new Error("Usuario incorrecto");

      const validate = await user.validatePassword(Contraseña);
      if (!validate) throw new Error("Contraseña erronea");

      const payload = {
        id: user.id,
        Nombre: user.Nombre,
      };
      console.log(`🚀 ~ UserController ~ login= ~ payload:`, payload);
    }
  };
}

export default UserApi;
