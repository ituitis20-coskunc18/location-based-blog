const { User, Trip } = require('../database/db_connections')

module.exports = {
    async example(req, res) {
        try {
            const user = await User.findOne({})
            if (!user) {
                console.log('No user found')
                res.sendStatus(404)
                return
            }
            res.send({ body: 'slm', status: 200 })
            user.exampleFunction("example argument")
        } catch (error) {
            console.log(error)
        }

    }


}