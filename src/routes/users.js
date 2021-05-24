const {Router} = require('express');

const { getAllUsers,
        getUserById,
        createUser, 
        updateUser, 
        modifyUser, 
        deleteUser 
} = require('../controllers/users')

const routes = Router();

routes.get('/',getAllUsers);
routes.get('/:id',getUserById);
routes.post('/',createUser);
routes.put('/:id',updateUser);
routes.patch('/:id',modifyUser);
routes.delete('/:id',deleteUser);

module.exports = routes;
