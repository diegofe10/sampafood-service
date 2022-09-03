const restaurantes = require('../../data/restaurantes.json');

class Restaurante {

    static getAll() {
        return new Promise(function (resolve, reject) {
            resolve(restaurantes);           
        });
    }

}

module.exports = Restaurante;