const Sequelize = require('sequelize')
const databaseConfig = require('./config/database')
const Form = require('./models/Form')

const models = [Form];

const connection = new Sequelize(databaseConfig)

models.forEach(model => model.init(connection))