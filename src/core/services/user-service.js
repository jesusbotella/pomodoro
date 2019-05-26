class UserService {
  constructor(apiService) {
    this.apiService = apiService;
  }

  login() {
    // TODO: Make real request and remove this

    if (this.apiService) {
      // TODO: make request
    }

    const response = {
      user: {
        email: 'fakeemail@email.com',
        id: 'fakeId',
      },
      authentication: {
        accessToken: 'fakeToken',
      },
    };

    return Promise.resolve(response);
  }
}

export default new UserService();
