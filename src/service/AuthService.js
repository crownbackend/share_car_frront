class AuthService {
    getUser() {
        const token = this.getToken();
        if (!token) {
            return false;
        }
        return true;
    }

    getToken() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService()
