const UserRepository = require('../repositories/userRepository');
const repository = new UserRepository();

const findAll = async() => {
  return await repository.findAll();
}

const findWithPagination = async(filter,options) => {
  return await repository.findWithPagination(filter,options);
}

const findById = async(id) => {
  return await repository.findById(id);
}

const save = async(user) => {
  return await repository.save(user);
}

const update = async(id,user) => {
  return await repository.update(id,user);
}

const remove = async(id) => {
  return await repository.remove(id);
}

module.exports = {
  findAll,
  findWithPagination,
  findById,
  save,
  update,
  remove
}
