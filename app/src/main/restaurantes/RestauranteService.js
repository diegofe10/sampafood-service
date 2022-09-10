const axios = require('axios').default;
const restaurantesLocaisApiurl = process.env.RESTAURANTES_LOCAIS_API_URL;

class RestauranteService {
 
    static findAll() {
        return new Promise(function(resolve, reject) {
            axios.get(restaurantesLocaisApiurl + '/v1/restaurantes')
            .then(function (response) {
                resolve(response.data);  
            })
            .catch(function (error) {
                reject(error);
            })
        });
    }
    
}

module.exports = RestauranteService;
