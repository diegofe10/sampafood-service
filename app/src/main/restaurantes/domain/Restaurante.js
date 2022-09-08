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

    static save(data) {
        
    }

    static validate(req, res, data) {
        let { nome, tipo, refeicoes, endereco= { rua, cidade, cep, localReferencia } } = data;

        nomeValidator(nome);
        tipoValidator(tipo);
        refeicoesValidator(refeicoes);
        enderecoValidator(endereco);
    }
    
}

function nomeValidator(nome) {
    const e = new Error();
    
    if (nome.length > 20) {
        e.name = 'ValidationError';
        e.message = 'O campo `nome` não pode ser maior que 20 caracteres.';
        throw e;
    }
}

function tipoValidator(tipo) {
    const e = new Error();
    
    if (tipo.length > 50) {
        e.name = 'ValidationError';
        e.message = 'O campo `tipo` não pode ser maior que 50 caracteres.';
        throw e;
    }
}

function enderecoValidator(endereco) {
    const pattern = endereco.cep.substring(5,6);

    if (pattern != '-') {
        console.log('error');
    }
}

function refeicoesValidator(refeicoes) {
    const e = new Error();

    if (refeicoes.length > 20) {
        e.name = 'ValidationError';
        e.message = 'O campo `refeicoes` não pode ser maior que 20 caracteres.';
        throw e;
    }
}

module.exports = Restaurante;
