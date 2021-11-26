const TOKEN = 'token';

export default class TokenStorage {
    saveToken(token) {
        localStorage.setItem(TOKEN, token);
    }

    async getToken() { return localStorage.getItem(TOKEN); }
    clearToken() { localStorage.clear(TOKEN); }
}