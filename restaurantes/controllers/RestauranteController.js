const helpers = require('./../../common/helpers');
const Restaurante = require('../models/Restaurante');

class RestauranteController {
    // GET /restaurantes
    async findAll(req, res) {
        try {
            const resturantes = await Restaurante.getAll();

            return helpers.success(res, resturantes);
        } 
        catch (error) {
            return helpers.error(res, error);
        }
    }


}

module.exports = new RestauranteController();