const express = require('express');
const userService = require('../services/userService');
/**
 *
 * @params {express.Request} req
 * @params {express.Response} res
 */
const getAllUsers = async (req,res,next)=>{
  try{
    const users = await userService.findAll();
    res.json(users); 
  }catch(err){
    next(err);
  }
}

const getUserById = async (req,res,next) => {
  try{
    const { id } =req.params;
    const user = await userService.findById(id);

    const result = {
      message:'User found',
      user
    }
    res.json(result);
  }catch(err){
    next(err);
  }
}

const createUser = async (req,res,next) =>{
  try{
    let user = req.body;
    user = await userService.save(user)
    const result = {
      message:'User created',
      user
    }
  res.status(201).json(result);
  }catch(err){
    next(err);
  }
  
}

const updateUser = async (req,res,next)=>{
  try{
    const { id } =req.params;
    let user = req.body;
    user._id = id;
    await userService.update(id,user);

    const result = {
      message:'User updated',
      user
    }
    res.json(result);
  }catch(err){
    next(err);
  }
  
}

const modifyUser = (req,res) =>{
  const {id} = req.params;
  let user = req.body;
  user.id = id;

  const result = {
    message:'User update with patch',
    user
  }
  res.json(result)
}

const deleteUser = async (req,res,next)=>{
  try{
    const {id} = req.params;
    const user = await userService.remove(id);
    const result = {
      message:`User with id: ${id} deleted`,
    }
    res.json(result)
  }catch(err){
    next(err);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  modifyUser,
  deleteUser
}
