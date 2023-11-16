import { TipoUsuario } from "../Models/index.js";

class TipoUsuarioController {
    constructor() {}

    getAllTipoUsuario = async (req, res) => {
      try {
        const tipoUsuario = await TipoUsuario.findAll({ attributes: ["Id", "Nombre"] });
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
        const tipoUsuario = await TipoUsuario.create({
            Nombre,
        });
        res.status(200).send({
          success: true,
          message: "Tipo de usuario creado con exito",
          data: tipoUsuario,
        });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
    };


    // -----------------

    deleteTipoUsuario = async (req, res) => {
      try {
        const { id } = req.params;
        const tipoUsuario = await TipoUsuario.destroy({
          where: { id },
        });

        if (!tipoUsuario ) throw new Error("No se pudo eliminar el tipo de usuario");
        res
          .status(200)
          .send({ success: true, message: "Tipo de usuario eliminada", data: tipoUsuario });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
    };
  }

  export default TipoUsuarioController;