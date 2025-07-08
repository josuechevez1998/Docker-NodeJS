const UserModel = require('../models/userModel');
const userModel = new UserModel();

class UserController {

    async index(req, res) {
        const users = await userModel.select();
        return res.json(users).status(200);
    }

    async store(req, res) {
        const { name, email, password, state } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: 'name, email and password are required' });
        }

        try {

            const user = await userModel.insert({ name, email, password, state });
            res.json(user);

        } catch (error) {
            
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = new UserController();
