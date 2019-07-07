import Vue from 'vue';
import Vuex from 'vuex';

// Store namespaces
import user from './user';
import pomodoro from './pomodoro';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    pomodoro,
  },
});

export default store;
