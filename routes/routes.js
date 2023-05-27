const NewsController = require('../controller/NewsController');
const routes = require('express').Router( );

routes.get('/', NewsController.home);
routes.get('/Add', NewsController.Add);
routes.post('/create', NewsController.Create);


module.exports = routes;