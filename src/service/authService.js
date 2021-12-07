export default class AuthService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async signup(username, password, name, email) {
    const data = await this.http.fetch('/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
        name,
        email,
      }),
    });
    this.tokenStorage.saveToken(data.token);
    return data;
  }

  async login(username, password) {
    const data = await this.http.fetch('/user/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    this.tokenStorage.saveToken(data.token);
    return data;
  }

  async me() {
    const token = this.tokenStorage.getToken();
    return this.http.fetch('/user/me', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  async logout() {
    this.tokenStorage.clearToken();
  }
}
