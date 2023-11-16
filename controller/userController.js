import { User } from "../Models/index.js";
import { generateToken } from "../utils/token.js";
import UserApi from "../Api/userApi.js";

class UserController {
    constructor() {
      this.userApi = new UserApi()
    }

    getAllUsers = async (req, res) => {
      try {
        const user = await User.findAll({ attributes: ["Id", "Nombre"] });
        res.status(200).send({
          success: true,
          message: "Todos los usuarios que hay",
          data: user,
        });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
    };

    getUserById = async (req, res) => {
      try {
        const { id } = req.params;
        // const user = await User.findOne({
        //   where: { id },
        //   attributes: ["id", "Nombre"],
        // //   include: [{ model: Role, attributes: ["name"] }],
        // });
        // if (!user) throw new Error("no hay User");

        const user = await this.userApi.getUserById(id)
        res.status(200).send({
          success: true,
          message: "Usuario encontrado",
          data: user,
        });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
    };
    // ------------------
    createUser = async (req, res) => {
      try {
        const { Nombre, Apellido, Direccion, Email, TipoUsuario, Contraseña } = req.body;
        const user = await User.create({
          Nombre,
          Apellido,
          Direccion,
          Email,
          TipoUsuario,
          Contraseña,
        });
        res.status(200).send({
          success: true,
          message: "Usuario creado con exito",
          data: user,
        });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
    };

    login = async (req, res) => {
      try {
        const { Email, Contraseña } = req.body;
        const user = await User.findOne({
          where: { Email },
        });
        if (!user) throw new Error("Usuario incorrecto");

        const validate = await user.validatePassword(Contraseña);
        if (!validate) throw new Error("Contraseña erronea");

        const payload = {
          id: user.id,
          Nombre: user.Nombre,
        //   role: user.roleId,
        };
        console.log(`🚀 ~ UserController ~ login= ~ payload:`, payload);

        const token = generateToken(payload);
        res.cookie("token", token);

        res.status(200).send({ success: true, message: "usuario logeado" });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
    };

    me = async (req, res) => {
      console.log(`🚀 ~ UserController ~ me= ~ req:`, req.user)
      try {
        res.status(200).send({ success: true, message: "usuario me" });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
    };

    // -----------------
    updateUser = async (req, res) => {
      try {
        const { Nombre } = req.body;
        const { Id } = req.params;
        const user = await User.update(
          { Nombre },
          {
            where: { Id },
          }
        );
        if (user[0] === 0) throw new Error("no se modifico nada");
        res
          .status(200)
          .send({ success: true, message: "Usuario modificado", data: user });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
    };

    deleteUser = async (req, res) => {
      try {
        const { id } = req.params;
        const user = await User.destroy({
          where: { id },
        });

        if (!user) throw new Error("No se pudo eliminar");
        res
          .status(200)
          .send({ success: true, message: "Usuario eliminado", data: user });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
    };
  }

  export default UserController;