export default class BoardService {
    constructor(httpClient, base, token) {
      this.httpClient = httpClient;
      this.base = base;
      this.token = token; // 함수로 바꿔야함.
    }
  
    async getBoards() {
      return await this.httpClient.getAxios().get(this.base + "/free"); // routing
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