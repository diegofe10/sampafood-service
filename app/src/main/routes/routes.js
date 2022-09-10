/**
 * We define all our routes in this file. Routes are matched using `path`.
 * 1. If "path" is a string, then we simply match with url
 * 2. If "path is a object, then we assume it is a RegEx and use RegEx matching
 */
const restauranteController = require('../restaurantes/RestauranteController')

const routes = [
    {
        method: 'GET',
        path: '/v1/restaurantes',
        handler: restauranteController.getAll.bind(restauranteController)
    },
    {
        method: 'GET',
        path: /v1\/restaurantes\/([0-9]+)/,
        handler: restauranteController.findById.bind(restauranteController)
    },
    {
        method: 'POST',
        path: '/v1/restaurantes',
        handler: restauranteController.create.bind(restauranteController)
    }
];

module.exports = routes;