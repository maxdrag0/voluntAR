import User from "../Models/User.js"

class UserApi {

    getAllUser = async ()=>{
        const user = await User.findAll({ attributes: ["Id", "Nombre"] });
    }


    getUserById = async (id)=>{
        const user = await User.findOne({
            where: { id },
            attributes: ["id", "Nombre"],
          });
          if (!user) throw new Error("no hay User");
    }

    createUser = async (Nombre, Apellido, Direccion, Email, TipoUsuario, Contraseña) => {
        const user = await User.create({
            Nombre,
            Apellido,
            Direccion,
            Email,
            TipoUsuario,
            Contraseña,
          });
    }

    updateUser = async (Nombre, Id) =>{
      const user = await User.update(
          { Nombre },
          {
            where: { Id },
          }
        );
        if (user[0] === 0) throw new Error("no se modifico nada");
    }

    deleteUser = async (id) =>{
        const user = await User.destroy({
            where: { id },
          });

          if (!user) throw new Error("No se pudo eliminar");
    }

    login = async (Email, Contraseña)=>{
        const user = await User.findOne({
            where: { Email },
          });
          if (!user) throw new Error("Usuario incorrecto");

          const validate = await user.validatePassword(Contraseña);
          if (!validate) throw new Error("Contraseña erronea");

          const payload = {
            id: user.id,
            Nombre: user.Nombre,
          };
          console.log(`🚀 ~ UserController ~ login= ~ payload:`, payload);
    }
}

export default UserApi