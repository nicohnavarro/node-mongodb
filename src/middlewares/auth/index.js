const  { check, validationResult } = require('express-validator');
const AppError = require('../../errors/appError');
const userService = require('../../services/userService');

const _emailRequired = check('email','Email required').not().isEmpty();
const _emailValid = check('email','Email invalid').isEmail();

const _passwordRequired = check('password','Password required').not().isEmpty();

const _validationResult = (req,res,next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    throw new AppError('Validation Error',400,errors.errors);
  }
  next();
}

const postLoginRequestValidations = [
  _emailRequired,
  _emailValid,
  _passwordRequired,
  _validationResult,
]
 
module.exports = {
  postLoginRequestValidations
}
