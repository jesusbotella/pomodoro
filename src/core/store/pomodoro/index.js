import * as mutations from './mutations';
import * as actions from './actions';

const pomodoroState = {
  namespaced: true,
  state: {
    pomodoros: {},
  },
  mutations,
  actions,
};

export default pomodoroState;
