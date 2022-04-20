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

    logOut() {
        localStorage.removeItem('user');
    }
}

export default new AuthService()
