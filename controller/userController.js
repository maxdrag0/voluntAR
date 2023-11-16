import { User } from "../Models/index.js";
import { generateToken } from "../utils/token.js";

class UserController {
    constructor() {}
    getAllUsers = (req, res) => {
      res.send("Users");
    };
    getUserById = async (req, res) => {
      try {
        const { id } = req.params;
        const user = await User.findOne({
          where: { id },
          attributes: ["id", "Nombre"],
        //   include: [{ model: Role, attributes: ["name"] }],
        });

        if (!user) throw new Error("no hay User");

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

    deleteUser = (req, res) => {
      res.send("Users delete");
    };
  }

  export default UserController;