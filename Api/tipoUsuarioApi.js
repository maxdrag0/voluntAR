import TipoUsuario from "../Models/TipoUsuario.js"

class TipoUsuarioApi {

    getAllTipoUsuario = async ()=>{
        const tipoUsuario = await TipoUsuario.findAll({ attributes: ["Id", "Nombre"] });
    }

    createTipoUsuario = async (Nombre) => {
        const tipoUsuario = await TipoUsuario.create({
            Nombre,
        });
    }

    updateTipoUsuario = async (Nombre, Id) =>{
        const tipoUsuario = await TipoUsuario.update(
            { Nombre },
            {
              where: { Id },
            }
          );
          if (tipoUsuario[0] === 0) throw new Error("no se modifico nada");
    }

    deleteTipoUsuarioApi = async (id) =>{
        const tipoUsuario = await TipoUsuario.destroy({
            where: { id },
          });

          if (!tipoUsuario) throw new Error("No se pudo eliminar el tipo de usuario");
    }
}

export default TipoUsuarioApi