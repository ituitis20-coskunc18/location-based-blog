const config = require('./config/config')
const AuthController = require('./controllers/AuthController')
const ExampleController = require('./controllers/ExampleController')

module.exports = function(app) {
    /*3rd party api access blocking*/
    // app.all('/api*', function(req, res, next) {
    //     if (req.headers.referer && req.headers.referer.startsWith("http://localhost:" + config.port))
    //         next()
    //     else
    //         res.sendStatus(403)
    // })


    /*api routes*/

    app.get('/api/example', function(req, res) {
        ExampleController.example(req, res)
    })

    /* auth calls */
    app.post('/api/auth/login', function(req, res) {
        AuthController.login(req, res)
    })
    app.post('/api/auth/register', function(req, res) {
        AuthController.register(req, res)
    })
    app.post('/api/auth/delete', function(req, res) {
        AuthController.delete(req, res)
    })

    /* invalid api route */
    app.all('/api*', function(req, res) {
        res.send("invalid api call")
    })
}