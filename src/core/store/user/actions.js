import UserService from '@/core/services/user-service';
import UserModel from '@/core/models/user';

export function login(context) {
  // Google Auth
  const googleAuthResponse = {
    email: 'fakeemail@email.com',
    sessionToken: 'fakeGoogleToken',
  };

  UserService.login(googleAuthResponse)
    .then((response) => {
      const { user: userData, authentication } = response;
      const user = new UserModel(userData.email, userData.id);

      context.commit('setUser', user);
      context.commit('setAuthentication', authentication);
    });
}

export function logout() {
  // TODO: Do login
}
