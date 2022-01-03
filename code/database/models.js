const config = require('../config/config')

module.exports = (sequelize, DataTypes, Op) => {

    const User = require('./User').model(sequelize, DataTypes, Op)

    const Trip = require('./Trip').model(sequelize, DataTypes, Op)

    const Post = require('./Post').model(sequelize, DataTypes, Op)

    User.hasMany(Trip, {
        foreignKey: 'owner'
    })

    Post.belongsTo(User, {
        foreignKey: 'owner'
    })

    Trip.hasMany(Post, {
        foreignKey: 'parentTrip'
    })
    Post.belongsTo(Trip, {
        foreignKey: 'parentTrip'
    })
    return { User: User, Trip: Trip, Post: Post }
}