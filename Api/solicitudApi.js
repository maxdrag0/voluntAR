import Solicitud from "../Models/Solicitud.js"

class SolicitudApi {

    getAllSolicitudes = async ()=>{
        const solicitud = await Solicitud.findAll({ attributes: ["Id", "Asunto"] });
    }

    createSolicitud = async (Asunto, Tipo, IdUsuario, Direccion, Ciudad, Descripcion) => {
        const solicitud = await Solicitud.create({
            Asunto,
            Tipo,
            IdUsuario,
            Direccion,
            Ciudad,
            Descripcion,
          });
    }

    updateSolicitud = async (Asunto, Id) =>{
        const solicitud = await Solicitud.update(
            { Asunto },
            {
              where: { Id },
            }
          );
          if (solicitud[0] === 0) throw new Error("no se modifico nada");
    }

    deleteSolicitud = async (id) =>{
        const solicitud = await Solicitud.destroy({
            where: { id },
          });

          if (!solicitud) throw new Error("No se pudo eliminar la solicitud");
    }
}

export default SolicitudApi