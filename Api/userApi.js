import User from "../Models/User.js"

class UserApi {

    getAllUser = async ()=>{

    }


    getUserById = async (id)=>{
        const user = await User.findOne({
            where: { id },
            attributes: ["id", "Nombre"],
          });
          if (!user) throw new Error("no hay User");
    }

    createUser = async (req, res) => {

    }

    deleteUser = async (req, resp) =>{

    }
}

export default UserApi