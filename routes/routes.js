const NewsController = require('../controller/NewsController');
const routes = require('express').Router( );

routes.get('/', NewsController.home);
routes.get('/Add', NewsController.Add);
routes.post('/create', NewsController.Create);
routes.get('/not/:id', NewsController.not);
routes.get('/delete/:id', NewsController.Delete);

module.exports = routes;