import { Router } from "express";
import SolicitudController from "../controller/solicitudController.js";

const solicitudRoutes = Router();
const solicitudController = new SolicitudController();

solicitudRoutes.post("", solicitudController.createSolicitud);

solicitudRoutes.get("", solicitudController.getAllSolicitudes);

solicitudRoutes.delete("/:id", solicitudController.deleteSolicitud);

export default solicitudRoutes;