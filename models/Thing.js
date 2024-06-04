const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
    title: { type: String, required: true },  // pas besoin de mettre un champ pour _id car il est généré automatiquement par Mongoose //
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    userId: { type: String, required: true },
    price: { type: Number, required: true },
});

module.exports = mongoose.model('Thing', thingSchema);