const helpers = require('./../../common/helpers');
const Restaurante = require('../models/Restaurante');

class RestauranteController {
    // GET /restaurantes
    async findAll(req, res) {
        try {
            const restaurantes = await Restaurante.getAll();

            return helpers.success(res, restaurantes);
        } 
        catch (error) {
            return helpers.error(res, error);
        }
    }

    // GET /restaurantes/:id
    async findById(req, res, id) {
        try {
            console.log(id);
            const restaurante = await Restaurante.getById(id);

            return helpers.success(res, restaurante);
        } catch (error) {
            return helpers.error(res, error);
        }
    }


}

module.exports = new RestauranteController();