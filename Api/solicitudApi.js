import Solicitud from "../Models/Solicitud.js";
import validaciones from "../utils/validaciones.js";

class SolicitudApi {
  getAllSolicitudes = async () => {
    const solicitud = await Solicitud.findAll({ attributes: ["Id", "Asunto"] });
  };

  createSolicitud = async (
    Asunto,
    Tipo,
    IdUsuario,
    Direccion,
    Ciudad,
    Descripcion
  ) => {
    if (
      validaciones.esString(Asunto) &&
      validaciones.esString(Direccion) &&
      validaciones.esString(Ciudad) &&
      validaciones.esString(Descripcion) &&
      validaciones.esNumeroEntero(Tipo) &&
      validaciones.esNumeroEntero(IdUsuario)
    ) {
      const solicitud = await Solicitud.create({
        Asunto,
        Tipo,
        IdUsuario,
        Direccion,
        Ciudad,
        Descripcion,
      });
    } else {
      console.log("Tipo de dato invalido");
    }
  };

  updateSolicitud = async (Asunto, Id) => {
    if (validaciones.esString(Asunto) && validaciones.esNumeroEntero(Id)) {
      const solicitud = await Solicitud.update(
        { Asunto },
        {
          where: { Id },
        }
      );
      if (solicitud[0] === 0) throw new Error("no se modifico nada");
    } else {
      console.log("Tipo de dato invalido");
    }
  };

  deleteSolicitud = async (id) => {
    if (validaciones.esNumeroEntero(id)) {
      const solicitud = await Solicitud.destroy({
        where: { id },
      });

      if (!solicitud) throw new Error("No se pudo eliminar la solicitud");
    } else {
      console.log("Tipo de dato invalido");
    }
  };
}

export default SolicitudApi;
