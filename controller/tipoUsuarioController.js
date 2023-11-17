import { TipoUsuario } from "../Models/index.js";
import TipoUsuarioApi from "../Api/tipoUsuarioApi.js";

class TipoUsuarioController {
    constructor() {
      this.TipoUsuarioApi = new TipoUsuarioApi()
    }

    getAllTipoUsuario = async (req, res) => {
      try {
        const tipoUsuario = await this.TipoUsuarioApi.getAllTipoUsuario()
        res.status(200).send({
          success: true,
          message: "Todos los tipo de usuario",
          data: tipoUsuario,
        });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
    };
    // ------------------
    createTipoUsuario = async (req, res) => {
      try {
        const { Nombre } = req.body;
        const tipoUsuario = await this.TipoUsuarioApi.createTipoUsuario(Nombre);
        res.status(200).send({
          success: true,
          message: "Tipo de usuario creado con exito",
          data: tipoUsuario,
        });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
    };

    updateTipoUsuario = async (req, res) => {
      try {
        const { Nombre } = req.body;
        const { Id } = req.params;
        const tipoUsuario = await this.TipoUsuarioApi.updateTipoUsuario(Nombre,Id)
        res
          .status(200)
          .send({ success: true, message: "Tipo de usuario modificado", data: tipoUsuario });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
    };

    // -----------------

    deleteTipoUsuario = async (req, res) => {
      try {
        const { id } = req.params;
        const tipoUsuario = await this.TipoUsuarioApi.deleteTipoUsuarioApi(id);
        res
          .status(200)
          .send({ success: true, message: "Tipo de usuario eliminada", data: tipoUsuario });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
    };
  }

  export default TipoUsuarioController;