const config = require('../config/config')
const bcrypt = require('bcrypt')

module.exports.model = (sequelize, DataTypes, Op) => {
    const user = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(config.models.user.nameL),
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(60, true),
            set(value) {
                const hashed = bcrypt.hashSync(value, config.models.user.salt_factor)
                this.setDataValue('password', hashed)
            },
            allowNull: false
        },
        registrationDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        savedTrips: {
            type: DataTypes.JSON,
            defaultValue: [],
            get() {
                const rawValue = this.getDataValue('savedTrips');
                return JSON.parse(JSON.stringify(rawValue || '[]'))
            }
        },
        savedPosts: {
            type: DataTypes.JSON,
            defaultValue: [],
            get() {
                const rawValue = this.getDataValue('savedPosts');
                return JSON.parse(JSON.stringify(rawValue || '[]'))
            }
        },


    }, {
        tableName: 'users',
        timestamps: false
    })
    user.prototype.comparePassword = async function(password) {
        return await bcrypt.compare(password, this.password)
    }
    user.prototype.getSavedPosts = async function(Post) {
        try {
            return await Post.findAll({
                where: {
                    id: {
                        [Op.in]: this.savedPosts
                    }
                }
            })
        } catch (err) {
            console.log(err)
        }
    }
    user.prototype.getSavedTrips = async function(Trip) {
        try {
            return await Trip.findAll({
                where: {
                    id: {
                        [Op.in]: this.savedTrips
                    }
                }
            })
        } catch (err) {
            console.log(err)
        }
    }

    user.prototype.exampleFunction = function(exampleArg) {
        console.log("Given Argument: " + exampleArg)
    }

    return user
}