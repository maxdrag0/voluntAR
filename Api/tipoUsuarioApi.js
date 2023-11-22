import TipoUsuario from "../Models/TipoUsuario.js";
import validaciones from "../utils/validaciones.js";

class TipoUsuarioApi {
  getAllTipoUsuario = async () => {
    const tipoUsuario = await TipoUsuario.findAll({
      attributes: ["Id", "Nombre"],
    });
  };

  createTipoUsuario = async (Nombre) => {
    if (validaciones.esString(Nombre)) {
      const tipoUsuario = await TipoUsuario.create({
        Nombre,
      });
    } else {
      console.log("Tipo de dato invalido");
    }
  };

  updateTipoUsuario = async (Nombre, Id) => {
    if (validaciones.esString(Nombre) && validaciones.esNumeroEntero(Id)) {
      const tipoUsuario = await TipoUsuario.update(
        { Nombre },
        {
          where: { Id },
        }
      );
      if (tipoUsuario[0] === 0) throw new Error("no se modifico nada");
    } else {
      console.log("Tipo de dato invalido");
    }
  };

  deleteTipoUsuarioApi = async (id) => {
    if (validaciones.esNumeroEntero(id)) {
      const tipoUsuario = await TipoUsuario.destroy({
        where: { id },
      });

      if (!tipoUsuario)
        throw new Error("No se pudo eliminar el tipo de usuario");
    } else {
      console.log("Tipo de dato invalido");
    }
  };
}

export default TipoUsuarioApi;
