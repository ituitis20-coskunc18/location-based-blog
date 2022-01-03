const dotenv = require("dotenv")
dotenv.config({ path: './.env' })

const db = require("./database/db_connections")

const express = require('express')
const history = require('connect-history-api-fallback')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

const config = require('./config/config')

app.use(bodyParser.json())
app.use(cors())
require("./routes")(app)
app.use(express.static('public'));
app.use(history({
    disableDotRule: true,
    verbose: false
}))

app.use(express.static('public'))

db.sequelize.sync(config.db.syncOptions).then(() => {
    console.log("Database connected")
}).catch((err) => {
    console.log(err)
    console.log("db error")
}).finally(() => {
    app.listen(config.port, () => {
        console.log(`App listening at http://localhost:${config.port}`)
    })
})