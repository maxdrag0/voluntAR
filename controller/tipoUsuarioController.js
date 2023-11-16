import { TipoUsuario } from "../Models/index.js";

class TipoUsuarioController {
    constructor() {}

    getAllTipoUsuario = (req, res) => {
      res.send("Todas los tipos de usuario");
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

    deleteTipoUsuario = (req, res) => {
      res.send("Tipo de usuario eliminado");
    };
  }

  export default TipoUsuarioController;