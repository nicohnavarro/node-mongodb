const {Routes} = require('express');
const { getAllUsers,
        createUser, 
        updateUser, 
        modifyUser, 
        deleteUser 
} = require('../controllers/users')

const routes = Routes();

routes.get('/',getAllUsers);
routes.post('/',createUser);
routes.put('/:id',updateUser);
routes.patch('/:id',modifyUser);
routes.delete('/:id',deleteUser);

