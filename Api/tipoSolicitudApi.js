import TipoSolicitud from "../Models/TipoSolicitud.js";
import validaciones from "../utils/validaciones.js";

class TipoSolicitudApi {
  getAllTipoSolicitud = async () => {
    const tipoSolicitud = await TipoSolicitud.findAll({
      attributes: ["Id", "Nombre"],
    });
  };

  createTipoSolicitud = async (Nombre) => {
    if (validaciones.esString(Nombre)) {
      const tipoSolicitud = await TipoSolicitud.create({
        Nombre,
      });
    } else {
      console.log("Tipo de dato invalido");
    }
  };

  updateTipoSolicitud = async (Nombre, Id) => {
    if (validaciones.esString(Nombre) && validaciones.esNumeroEntero(Id)) {
      const tipoSolicitud = await TipoSolicitud.update(
        { Nombre },
        {
          where: { Id },
        }
      );
      if (tipoSolicitud[0] === 0) throw new Error("no se modifico nada");
    } else {
      console.log("Tipo de dato invalido");
    }
  };

  deleteTipoSolicitud = async (id) => {
    if (validaciones.esNumeroEntero(id)) {
      const tipoSolicitud = await TipoSolicitud.destroy({
        where: { id },
      });

      if (!tipoSolicitud)
        throw new Error("No se pudo eliminar el tipo de solicitud");
    } else {
      console.log("Tipo de dato invalido");
    }
  };
}

export default TipoSolicitudApi;
