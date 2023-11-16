import { TipoSolicitud } from "../Models/index.js";

class TipoSolicitudController {
    constructor() {}

    getAllTipoSolicitudes = (req, res) => {
      res.send("Todas los tipos de solicitudes");
    };

    // ------------------
    createTipoSolicitud = async (req, res) => {
      try {
        const { Nombre } = req.body;
        const tipoSolicitud = await TipoSolicitud.create({
            Nombre,
        });
        res.status(200).send({
          success: true,
          message: "Tipo de solicitud creado con exito",
          data: tipoSolicitud,
        });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
    };


    // -----------------

    deleteTipoSolicitud = (req, res) => {
      res.send("Tipo de solicitud eliminado");
    };
  }

  export default TipoSolicitudController;