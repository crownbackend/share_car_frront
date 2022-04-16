import axios from "axios";

class SecurityApi {
    getBaseUrl() {
        return process.env.VUE_APP_APIBACKEND + '/login'
    }
    login(data) {
        const url = this.getBaseUrl() + '/'
        return axios.post(url, data)
    }
}

export default new SecurityApi();
