const Sequelize = require('sequelize')
const { Model } = require('sequelize')

module.exports = class Form extends Model {
  static init(sequelize) {
    super.init({
      observacao: Sequelize.STRING,
      severidade: Sequelize.STRING,
      destino: Sequelize.STRING,
      assunto: Sequelize.STRING,
      descricao: Sequelize.TEXT,
      projeto: Sequelize.STRING,
      classificacao: Sequelize.STRING,
      empresas: Sequelize.STRING,
      acao: Sequelize.STRING,
      prazo: Sequelize.STRING,
      data_abertura: Sequelize.DATE,
      emissor: Sequelize.STRING,
      departamento_emissor: Sequelize.STRING,
      anexo: Sequelize.STRING,
    }, {sequelize})
    return this;
  }
}