const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');
const userService = require('./userService');
const AppError = require('../errors/appError');

const login = async(email,password) => {
  try{
    const user = await userService.findByEmail(email);
    if(!user){
      throw new AppError('Authentication failed!',400)
    }
    console.log("passsword",password)
    console.log("usepasawod",user);
    const validPassword = await bcrypt.compare(password, user.password);
    
    if(!validPassword){
      throw new AppError('Authentication failed',400);
    }
    const token = _encrypt(user._id);

    return { 
      token,
      user:user.name,
      role:user.role
    }
  }catch(err){
    throw err;
  }
}

_encrypt = (id) => {
  return jwt.sign({ id }, config.auth.secret,{ expiresIn:config.auth.ttl});
}

module.exports = {
  login
}
