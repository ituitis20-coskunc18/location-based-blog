const config = require('../config/config')
const { Sequelize, DataTypes, QueryTypes, Op } = require('sequelize')
const db = {}


// @ts-ignore
const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, config.db.options)

db.sequelize = sequelize
db.Sequelize = Sequelize


const models = require('./models')(sequelize, DataTypes, Op)

db.User = models.User
db.Trip = models.Trip
db.Post = models.Post

module.exports = db