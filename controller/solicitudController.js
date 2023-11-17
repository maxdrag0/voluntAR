import { Solicitud } from "../Models/index.js";
import SolicitudApi from "../Api/solicitudApi.js";

class SolicitudController {
    constructor() {
      this.solicitudApi = new SolicitudApi()
    }

    getAllSolicitudes = async (req, res) => {
      try {
        const solicitud = await this.solicitudApi.getAllSolicitudes();
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
        // const solicitud = await Solicitud.create({
        //     Asunto,
        //     Tipo,
        //     IdUsuario,
        //     Direccion,
        //     Ciudad,
        //     Descripcion,
        // });
        const solicitud = this.solicitudApi.createSolicitud(Asunto, Tipo, IdUsuario, Direccion, Ciudad, Descripcion)
        res.status(200).send({
          success: true,
          message: "Solicitud creada con exito",
          data: solicitud,
        });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
    };

    updateSolicitud = async (req, res) => {
      try {
        const { Asunto } = req.body;
        const { Id } = req.params;
        // const solicitud = await Solicitud.update(
        //   { Asunto },
        //   {
        //     where: { Id },
        //   }
        // );
        // if (solicitud[0] === 0) throw new Error("no se modifico nada");
        const solicitud = await this.solicitudApi.updateSolicitud(Asunto, Id);
        res
          .status(200)
          .send({ success: true, message: "Usuario modificado", data: solicitud });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
    };
    // -----------------

    deleteSolicitud = async (req, res) => {
      try {
        const { id } = req.params;
        // const solicitud = await Solicitud.destroy({
        //   where: { id },
        // });

        // if (!solicitud ) throw new Error("No se pudo eliminar la solicitud");
        const solicitud = this.solicitudApi.deleteSolicitud(id)
        res
          .status(200)
          .send({ success: true, message: "Solicitud eliminada", data: solicitud });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
    };
  }

  export default SolicitudController;