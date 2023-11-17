import TipoSolicitud from "../Models/TipoSolicitud.js"

class TipoSolicitudApi {

    getAllTipoSolicitud = async ()=>{
        const tipoSolicitud = await TipoSolicitud.findAll({ attributes: ["Id", "Nombre"] });
    }

    createTipoSolicitud = async (Nombre) => {
        const tipoSolicitud = await TipoSolicitud.create({
            Nombre,
        });
    }

    updateTipoSolicitud = async (Nombre, Id) =>{
        const tipoSolicitud = await TipoSolicitud.update(
            { Nombre },
            {
              where: { Id },
            }
          );
          if (tipoSolicitud[0] === 0) throw new Error("no se modifico nada");
    }

    deleteTipoSolicitud = async (id) =>{
        const tipoSolicitud = await TipoSolicitud.destroy({
            where: { id },
          });

          if (!tipoSolicitud) throw new Error("No se pudo eliminar el tipo de solicitud");
    }
}

export default TipoSolicitudApi