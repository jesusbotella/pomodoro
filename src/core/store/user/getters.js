/* eslint-disable import/prefer-default-export */

export function isLoggedIn(state) {
  return Boolean(state.authentication.accessToken
                 && state.user && state.user.get('id'));
}
