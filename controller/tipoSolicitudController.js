import { TipoSolicitud } from "../Models/index.js";

class TipoSolicitudController {
    constructor() {}

    getAllTipoSolicitudes = async (req, res) => {
      try {
        const tipoSolicitud = await TipoSolicitud.findAll({ attributes: ["Id", "Nombre"] });
        res.status(200).send({
          success: true,
          message: "Todos los tipo de solicitudes",
          data: tipoSolicitud,
        });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
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

    deleteTipoSolicitud = async (req, res) => {
      try {
        const { id } = req.params;
        const tipoSolicitud = await TipoSolicitud.destroy({
          where: { id },
        });

        if (!tipoSolicitud ) throw new Error("No se pudo eliminar el tipo de solicitud");
        res
          .status(200)
          .send({ success: true, message: "Tipo de solicitud eliminada", data: tipoSolicitud });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
    };
  }

  export default TipoSolicitudController;