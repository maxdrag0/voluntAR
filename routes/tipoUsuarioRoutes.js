import { Router } from "express";
import TipoUsuarioController from "../controller/tipoUsuarioController.js";

const tipoUsuarioRoutes = Router();
const tipoUsuarioController = new TipoUsuarioController();

tipoUsuarioRoutes.post("", tipoUsuarioController.createTipoUsuario);

tipoUsuarioRoutes.get("", tipoUsuarioController.getAllTipoUsuario);

tipoUsuarioRoutes.delete("/:id", tipoUsuarioController.deleteTipoUsuario);

export default tipoUsuarioRoutes;
