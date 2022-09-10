/**
 * We define all our routes in this file. Routes are matched using `path`.
 * 1. If "path" is a string, then we simply match with url
 * 2. If "path is a object, then we assume it is a RegEx and use RegEx matching
 */
const restauranteRouter = require('../restaurantes/RestauranteRouter')

const routes = [
    {
        method: 'GET',
        path: '/v1/restaurantes',
        handler: restauranteRouter.getAll.bind(restauranteRouter)
    },
    {
        method: 'GET',
        path: /v1\/restaurantes\/([0-9]+)/,
        handler: restauranteRouter.findById.bind(restauranteRouter)
    },
    {
        method: 'POST',
        path: '/v1/restaurantes',
        handler: restauranteRouter.create.bind(restauranteRouter)
    }
];

module.exports = routes;