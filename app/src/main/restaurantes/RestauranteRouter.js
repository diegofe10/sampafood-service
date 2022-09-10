require('dotenv').config();
const helpers = require('../common/helpers');
const Restaurante = require('./domain/Restaurante');
const RestauranteService = require('./RestauranteService');

class RestauranteRouter {
    // GET /restaurantes
    async getAll(req, res) {
        try {
            const restaurantes = await RestauranteService.findAll();

            return helpers.success(res, restaurantes);
        } 
        catch (error) {
            return helpers.error(res, error);
        }
    }
    
    // GET /restaurantes/:id
    async findById(req, res, id) {
        try {
            const restaurante = await Restaurante.getById(id);
            return helpers.success(res, restaurante);
        } 
        catch (error) {
            return helpers.error(res, error);
        }
    }

    // POST /restaurantes
    async create(req, res, param, data) {
        data = JSON.parse(data);
        
        try {
            Restaurante.validate(req, res, data);

            const novoRestaurante = Restaurante.save(data);

            return helpers.success(res, novoRestaurante);
        } 
        catch (error) {
            if (error.name === 'VALIDATION_ERROR') {
                return helpers.validationError(res, error);
            } else {
                return helpers.error(res);
            }
        }
    }
}

module.exports = new RestauranteRouter();