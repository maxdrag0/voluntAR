import TipoSolicitudApi from "../Api/tipoSolicitudApi.js";

class TipoSolicitudController {
  constructor() {
    this.TipoSolicitudApi = new TipoSolicitudApi();
  }

  getAllTipoSolicitudes = async (req, res) => {
    try {
      const tipoSolicitud = await this.TipoSolicitudApi.getAllTipoSolicitud();
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
      const tipoSolicitud = await this.TipoSolicitudApi.createTipoSolicitud(
        Nombre
      );
      res.status(200).send({
        success: true,
        message: "Tipo de solicitud creado con exito",
        data: tipoSolicitud,
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updateTipoSolicitud = async (req, res) => {
    try {
      const { Nombre } = req.body;
      const { Id } = req.params;
      const tipoSolicitud = await this.tipoSolicitudApi.updateTipoSolicitud(
        Nombre,
        Id
      );
      res
        .status(200)
        .send({
          success: true,
          message: "Usuario modificado",
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
      const tipoSolicitud = await this.tipoSolicitudApi.deleteTipoSolicitud(id);
      res
        .status(200)
        .send({
          success: true,
          message: "Tipo de solicitud eliminada",
          data: tipoSolicitud,
        });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default TipoSolicitudController;
