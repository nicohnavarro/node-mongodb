const express = require('express');

/**
 *
 * @params {express.Request} req
 * @params {express.Response} res
 */
const getAllUsers = (req,res)=>{
  const users = [
    {
      id:1,
      name:'Nicolas'
    },
    {
      id:2,
      name: 'Mirta'
    }
  ]
  res.json(users); 
}

const createUser = (req,res) =>{
  const user = req.body;
  user.id = 6;

  const result = {
    message:'User created',
    user
  }

  res.status(201).json(result);
}

const updateUser = (req,res)=>{
  const { id } =req.params;
  const user = req.body;
  user.id = id;

  const result = {
    message:'User updated',
    user
  }
  res.json(result);
}

const modifyUser = (req,res) =>{
  const {id} = req.params;
  const user = req.body;
  user.id = id;

  const result = {
    message:'User update with patch',
    user
  }
  res.json(result)
}

const deleteUser = (req,res)=>{
  const {id} = req.params;
  const result = {
    message:`User with id: ${id} deleted`,
  }

  res.json(result);
}

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  modifyUser,
  deleteUser
}
