const { User } = require('../database/db_connections')

module.exports = {
    async register(req, res) {
        try {
            const user = await User.create(req.body)
            const userJson = user.toJSON()

            res.status(200).send({
                user: userJson
            })
        } catch (error) {
            res.status(400).send({
                error: 'This username is already in use.'
            })
        }
    },
    async login(req, res) {


        try {
            const { name, password } = req.body
            const user = await User.findOne({
                where: {
                    name: name
                },
                attribues: ['id', 'name', 'password']
            })

            if (!user) {
                res.status(400).send({
                    error: 'Incorrect username or password.'
                })
                return
            }

            const pass = await user.comparePassword(password)

            if (!pass) {
                res.status(400).send({
                    error: 'Incorrect username or password.'
                })
                return
            }

            const userJson = user.toJSON()
            res.status(200).send({
                user: userJson
            })
        } catch (error) {
            res.status(500).send({
                error: 'An error has occured trying to login'
            })
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.body

            await User.destroy({
                where: {
                    id: id
                }
            })
            res.sendStatus(200)
        } catch (error) {
            res.status(500).send({
                error: 'An error has occured trying to delete account'
            })
        }
    }
}