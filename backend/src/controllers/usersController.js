const debug = require('debug')('server:usersController');
const User = require('../models/usersModel');

function usersController() {
    async function getAll(req, res) {
        const users = await User.find();
        res.json(users);
    }

    async function createOne(req, res) {
        const newUser = new User(req.body);
        debug(newUser);
        try {
            await newUser.save();
            res.json(newUser);
        } catch (error) {
            debug(error);
            res.send(error);
        }
    }

    async function getById(req, res) {
        try {
            const userById = await User.findById(
                req.params.userId,
            );
            res.json(userById);
        } catch (error) {
            debug(error);
            res.status(404);
            res.send(error);
        }
    }

    async function updateById(req, res) {
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.userId,
                req.body,
                { new: true },
            );
            res.json(updatedUser)
        } catch (error) {
            debug(error);
            res.send(error);
        }
    }

    async function deleteById(req, res) {
        try {
            await User.findByIdAndDelete(req.params.userId);
            res.status(204);
            res.json();
        } catch (error) {
            debug(error);
            res.send(error);  
        }
    }

    return {
        getAll,
        createOne,
        getById,
        updateById,
        deleteById,
      };
}

module.exports = usersController;