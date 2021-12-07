export default class SnsService {
    constructor(http, tokenStorage, socket) {
      this.http = http;
      this.tokenStorage = tokenStorage;
      this.socket = socket;
    }
  
    async getAllSns(username) {
      const query = username ? `?username=${username}` : '';
      return this.http.fetch(`/sns/${query}`, {
        method: 'GET',
        headers: this.getHeaders(),
      });
    }
  
    async postSns(text) {
      return this.http.fetch(`/sns`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({ text, username: 'foxmon', name: 'foxmon' }),
      });
    }
  
    async deleteSns(snsId) { // no use
      return this.http.fetch(`/sns/${snsId}`, {
        method: 'DELETE',
        headers: this.getHeaders(),
      });
    }
  
    async updateSns(snsId, text) { // no use
      return this.http.fetch(`/sns/${snsId}`, {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify({ text }),
      });
    }
  
    getHeaders() { // for auth
      const token = this.tokenStorage.getToken();
      // const token = localStorage.getItem('token');
      return {
        Authorization: `Bearer ${token}`,
      };
    }
  
    onSync(callback) { // socket sync
      return this.socket.onSync('sns', callback);
    }
  }