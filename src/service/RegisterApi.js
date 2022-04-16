import axios from "axios";

class RegisterApi {
    getBaseUrl() {
        return process.env.VUE_APP_APIBACKEND + '/register'
    }
    registerUser(data) {
        const url = this.getBaseUrl() + '/'
        return axios.post(url, data)
    }
}

export default new RegisterApi();
