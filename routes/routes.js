const NewsController = require('../controller/NewsController');
const routes = require('express').Router( );

routes.get('/', NewsController.home);


module.exports = routes;