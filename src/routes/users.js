const {Router} = require('express');

const { getAllUsers,
        getUsersWithPagination,
        getUserById,
        createUser, 
        updateUser, 
        deleteUser 
} = require('../controllers/users')

const routes = Router();

routes.get('/',getAllUsers);
routes.get('/pag',getUsersWithPagination);
routes.get('/:id',getUserById);
routes.post('/',createUser);
routes.put('/:id',updateUser);
routes.delete('/:id',deleteUser);

module.exports = routes;
