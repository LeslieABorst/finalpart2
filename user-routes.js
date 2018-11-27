const express = require('express');
const userRoutes = express.Router();

userRoutes.get('/', (req, res) => {
    res.send('Getting all the users from the database.')
});

userRoutes.post('/', (req, res) => {
    res.send(`Added a new user: ${req.body.name} to the database`)
});

userRoutes.put('/:id', (req, res) => {
    res.send(`Updated user with id ${req.params.id}`)
});

userRoutes.delete('/:id', (req, res) => {
    res.send(`Deleted user id ${req.params.id} from the database`)
});

module.exports = userRoutes;