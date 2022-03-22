'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('forms', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      observacao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      severidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      destino: {
        type: Sequelize.STRING,
        allowNull: false
      },
      assunto: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      projeto: {
        type: Sequelize.STRING,
        allowNull: false
      },
      classificacao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      empresas: {
        type: Sequelize.STRING,
        allowNull: false
      },
      acao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      prazo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_abertura: {
        type: Sequelize.DATE,
        allowNull: false
      },
      emissor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      departamento_emissor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      anexo: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('forms');
  }
};
