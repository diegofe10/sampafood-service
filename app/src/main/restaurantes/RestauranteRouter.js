require('dotenv').config();
const helpers = require('../common/helpers');
const Restaurante = require('./domain/Restaurante');
const RestauranteService = require('./RestauranteService');

class RestauranteRouter {
   
    /**
    * @method GET
    * @endpoint /restaurantes
    * @description endpoint method for list of food services (restaurants)
    */
    async getAll(req, res) {
        try {
            const restaurantes = await RestauranteService.findAll();

            return helpers.success(res, restaurantes);
        } 
        catch (error) {
            return helpers.error(res, error);
        }
    }
    
    /**
    * @method GET
    * @endpoint /restaurantes/:id
    * @description endpoint method to return a single restaurant by id 
    */
    async findById(req, res, id) {
        try {
            const restaurante = await Restaurante.getById(id);
            return helpers.success(res, restaurante);
        } 
        catch (error) {
            return helpers.error(res, error);
        }
    }

    /**
    * @method POST
    * @endpoint /restaurantes
    * @description endpoint method to save data 
    */
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
