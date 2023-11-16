import { Solicitud } from "../Models/index.js";

class SolicitudController {
    constructor() {}

    getAllSolicitudes = async (req, res) => {
      try {
        const solicitud = await Solicitud.findAll({ attributes: ["Id", "Asunto"] });
        res.status(200).send({
          success: true,
          message: "Todos las solicitudes",
          data: solicitud,
        });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
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

    deleteSolicitud = async (req, res) => {
      try {
        const { id } = req.params;
        const solicitud = await Solicitud.destroy({
          where: { id },
        });

        if (!solicitud ) throw new Error("No se pudo eliminar la solicitud");
        res
          .status(200)
          .send({ success: true, message: "Solicitud eliminada", data: solicitud });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
    };
  }

  export default SolicitudController;