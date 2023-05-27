const mongoose = require('mongoose');

const connectToDb = ( )=>{
    mongoose
        .connect('mongodb://127.0.0.1:27017/News')
        .then(( )=>console.log('mongoDb connected'))
        .catch((err)=>console.log(err));
};

module.exports = connectToDb;