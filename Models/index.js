import User from "./User.js";
import Solicitud from "./Solicitud.js";
import TipoSolicitud from "./TipoSolicitud.js";
import TipoUsuario from "./TipoUsuario.js";

// AGREGAR RELACIONES
// Relación entre User y TipoUsuario
User.belongsTo(TipoUsuario, { foreignKey: 'TipoUsuario', as: 'tipoUsuario' });
TipoUsuario.hasMany(User, { foreignKey: 'TipoUsuario', as: 'usuarios' });

// Relación entre Solicitud y TipoSolicitud
Solicitud.belongsTo(TipoSolicitud, { foreignKey: 'Tipo', as: 'tipoSolicitud' });
TipoSolicitud.hasMany(Solicitud, { foreignKey: 'Tipo', as: 'solicitudes' });

// Relación entre Solicitud y User
Solicitud.belongsTo(User, { foreignKey: 'IdUsuario', as: 'usuario' });
User.hasMany(Solicitud, { foreignKey: 'IdUsuario', as: 'solicitudes' });

export { User, Solicitud, TipoSolicitud, TipoUsuario };