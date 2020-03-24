const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

  async index (request, response) {
    const ongs = await connection('ongs').select('*');
  
    return response.json(ongs);
  },


  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body; // Desestrutura o objeto em varias variaveis;

    const id = crypto.randomBytes(4).toString('HEX');
  
    //Declaro que esse procedimento deve ser concluido antes da aplicacao prosseguir.
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });
  
    return response.json({ id })
  }
};