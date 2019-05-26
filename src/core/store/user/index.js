import * as mutations from './mutations';
import * as getters from './getters';
import * as actions from './actions';

const userState = {
  namespaced: true,
  state: {
    user: null,
    authentication: {},
  },
  mutations,
  getters,
  actions,
};

export default userState;
