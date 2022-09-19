const { getUserByEmail } = require("../users/users.controllers");
const { comparePassword } = require("../utils/crypt");

const loginUser = async (email, password) => {
  // return await getUserByEmail(email)
  // .then((res) => {
  //   const verify_password = comparePassword(password, res.password);
  //   if (verify_password) {
  //     return user;
  //   }
  //   return false
  // })
  // .catch(err => {
  //   return false
  // }) 

  try {
    const user = await getUserByEmail(email)
    console.log(`Este es mi usuario `, user.dataValues);
    const verify_password = comparePassword(password, user.dataValues.password);
    if (verify_password) {
      return user.dataValues;
    }
    return false
  } catch (error) {
    return false
  }

  //? user.password Contraseña hasheada
  //* password Contraseña en texto plano
};

module.exports = {
  loginUser,
};
