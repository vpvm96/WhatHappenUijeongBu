export default class BoardService {
    constructor(httpClient, base, token) {
      this.httpClient = httpClient;
      this.base = base;
      this.token = token;
    }
  
    async getBoards() {
      return await this.httpClient.getAxios().get(this.base + "/board"); // routing
    }
  
    getBoard(id) {
      return this.httpClient.getAxios().post(this.base + `/board/${id}`);
    }
  
    createBoard(title, content) { // add content
      return this.httpClient.getAxios().post(this.base + "/board", {
        title,
        content,
        headers: this.getHeader()
      });
    }
  
    getHeader() {
      const token = this.token;
      return {
        Authorization: `Bearer ${token}`,
      };
    }
  }