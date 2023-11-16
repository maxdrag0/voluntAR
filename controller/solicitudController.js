import { Solicitud } from "../Models/index.js";

class SolicitudController {
    constructor() {}

    getAllSolicitudes = (req, res) => {
      res.send("Todas las solicitudes");
    };

    // ------------------
    createSolicitud = async (req, res) => {
      try {
        const { Asunto, Tipo, IdUsuario, Direccion, Ciudad, Descripcion } = req.body;
        const solicitud = await Solicitud.create({
            Asunto,
            Tipo,
            IdUsuario,
            Direccion,
            Ciudad,
            Descripcion,
        });
        res.status(200).send({
          success: true,
          message: "Solicitud creada con exito",
          data: solicitud,
        });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
    };


    // -----------------

    deleteSolicitud = (req, res) => {
      res.send("Solicitud eliminada");
    };
  }

  export default SolicitudController;