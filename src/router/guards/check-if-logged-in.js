import store from '@/core/store/user';

export default function checkIfLoggedIn(to, _, next) {
  const routeRequiresAuthentication = to.meta.requiresAuthentication;
  const userIsNotLoggedIn = !store.getters['user/isLoggedIn'];

  if (routeRequiresAuthentication && userIsNotLoggedIn) {
    // {API_URL}/login?next=/test
    next({ name: 'welcome', query: { next: to.fullPath } });
  }

  next();
}
