const express = require('express');
const app = express( );
const routes = require('./routes/routes');
const path = require('path');
const connectToDb = require('./database/db');
const ejs = require('ejs');
const bodyParser = require('body-parser');

connectToDb( );

app.set('view engine', 'ejs');
app.use(express.urlencoded( ));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json( ));
app.use(bodyParser.urlencoded({extended: false}));
app.use(routes);

app.listen(3000, ( )=>console.log('load server'));