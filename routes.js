/**
 * We define all our routes in this file. Routes are matched using `path`.
 * 1. If "path" is a string, then we simply match with url
 * 2. If "path is a object, then we assume it is a RegEx and use RegEx matching
 */
const restauranteController = require('./restaurantes/controllers/RestauranteController')

const routes = [
    {
        method: 'GET',
        path: '/v1/restaurantes',
        handler: restauranteController.findAll.bind(restauranteController)
    }
];

module.exports = routes;