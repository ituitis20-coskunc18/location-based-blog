const api = require("./api").api
const headers = require("./api").headers

const prefix = "auth/"

export default {
    name: "AuthServices",
    register(credentials) {
        return api.post(prefix + 'register', credentials, {
            headers: headers
        })
    },
    login(credentials) {
        console.log(credentials)
        return api.post(prefix + 'login', credentials, {
            headers: headers
        })
    }
}