const config = require('../config/config')
const { Op } = require("sequelize");

module.exports.model = (sequelize, DataTypes, Op) => {
    const post = sequelize.define('post', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: DataTypes.STRING(config.models.post.titleL),
        description: {
            type: DataTypes.TEXT('medium'),
            defaultValue: ''
        },
        creationDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        locationPoint: DataTypes.GEOMETRY('POINT'),
        location: {
            type: DataTypes.STRING(config.models.post.locationL),
            allowNull: false,
            defaultValue: ''
        },
        likedBy: {
            type: DataTypes.JSON,
            defaultValue: [],
            get() {
                const rawValue = this.getDataValue('likedBy');
                return JSON.parse(rawValue || '[]')
            }
        },
    }, {
        tableName: 'posts',
        timestamps: false
    })

    post.prototype.getLikedBy = async function(User) {
        try {
            return await User.findAll({
                where: {
                    id: {
                        [Op.in]: this.likedBy
                    }
                }
            })
        } catch (err) {
            console.log(err)
        }
    }

    return post
}