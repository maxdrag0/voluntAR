import { Router } from "express";
import TipoSolicitudController from "../controller/tipoSolicitudController.js";

const tipoSolicitudRoutes = Router();
const tipoSolicitudController = new TipoSolicitudController();

tipoSolicitudRoutes.post("", tipoSolicitudController.createTipoSolicitud);

tipoSolicitudRoutes.get("", tipoSolicitudController.getAllTipoSolicitudes);

tipoSolicitudRoutes.delete("/:id", tipoSolicitudController.deleteTipoSolicitud);

export default tipoSolicitudRoutes;
