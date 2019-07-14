/* eslint-disable class-methods-use-this */
class ApiService {
  get(url) {
    return Promise.resolve(url);
  }

  post(url, body) {
    return Promise.resolve(body);
  }

  put(url, body) {
    return Promise.resolve(body);
  }

  delete(url) {
    return Promise.resolve(url);
  }
}

export default new ApiService();
