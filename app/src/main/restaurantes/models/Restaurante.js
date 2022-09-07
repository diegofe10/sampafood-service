const restaurantes = require('../../data/restaurantes.json');

class Restaurante {

    static getAll() {
        return new Promise(function(resolve, reject) {
            resolve(restaurantes);           
        });
    }

    static getById(id) {
        return new Promise(async function(resolve, reject) {
            const idSalvo = await restaurantes.findIndex((elemento) => {
                return elemento.id.toString() == id;
            });

            if (idSalvo >= 0) {
                resolve(restaurantes[idSalvo]);
            }
            
            reject('Data not found');
        });
    }

}

module.exports = Restaurante;