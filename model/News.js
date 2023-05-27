const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },

    img: {
        type: String,
        require: true
    },

    text: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model('News', NewsSchema);
