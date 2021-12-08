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
      return this.httpClient.getAxios().post(this.base + `/free/${id}`);
    }
  
    createBoard(title, content, createAt, updateAt) { // add content
      return this.httpClient.getAxios().post(this.base + "/free", {
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