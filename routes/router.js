import { Router } from "express";
import userRoutes from "./userRoutes.js";
import solicitudRoutes from "./solicitudRoutes.js";
import tipoSolicitudRoutes from "./tipoSolicitudRoutes.js";
import tipoUsuarioRoutes from "./tipoUsuarioRoutes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/solicitudes", solicitudRoutes);
router.use("/tipoSolicitudes", tipoSolicitudRoutes);
router.use("/tipoUsuarios", tipoUsuarioRoutes);

export default router;
