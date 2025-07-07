const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Definir el esquema (como $fillable en Laravel)
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    state: { type: Boolean, default: true }
}, { timestamps: true });

// Crear el modelo
const User = mongoose.model('User', userSchema);

class UserModel {

    constructor() {
        this.model = User;
    }

    async insert(userData) {
        // Hashear la contraseña antes de guardar
        if (userData.password) {
            userData.password = await bcrypt.hash(userData.password, 10);
        }

        const newUser = new this.model(userData);
        const savedUser = await newUser.save();
        return savedUser.toObject(); 
    }

    async select(query = {}) {
        return await this.model.find(query);
    }

    async find(userId) {
        return await this.model.findById(userId);
    }

    async update(userId, user) {
        return await this.model.findByIdAndUpdate(userId, user, { new: true });
    }

    async delete(userId) {
        return await this.model.findByIdAndDelete(userId);
    }
}

module.exports = UserModel;
