const axios = require('axios').default
const token = process.env.SECRET || "locblog"
const headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token
}
const api = axios.create({
    baseURL: "http://localhost:" + (process.env.PORT || 8080) + "/api/",
    headers: this.headers
})
module.exports.api = api
module.exports.token = token
module.exports.headers = headers