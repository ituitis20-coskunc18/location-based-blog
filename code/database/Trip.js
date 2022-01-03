const config = require('../config/config')
const { Op } = require("sequelize");

module.exports.model = (sequelize, DataTypes, Op) => {
    const trip = sequelize.define('trip', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: DataTypes.STRING(config.models.trip.titleL),
        description: {
            type: DataTypes.TEXT('medium'),
            defaultValue: ''
        },
        hiddenFromGuests: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        creationDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        location: {
            type: DataTypes.STRING(config.models.trip.locationL),
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
        tableName: 'trips',
        timestamps: false
    })

    trip.prototype.getLikedBy = async function(User) {
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

    return trip
}