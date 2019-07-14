import Vue from 'vue';

/* eslint-disable no-param-reassign */
export function addPomodoro(state, pomodoro) {
  state.pomodoros = {
    ...state.pomodoros,
    [pomodoro.get('id')]: pomodoro,
  };
}

export function updatePomodoro(state, pomodoroProperties) {
  const pomodoro = state.pomodoros[pomodoroProperties.id];

  Object
    .keys(pomodoroProperties.propertiesToUpdate)
    .forEach((property) => {
      pomodoro.set(property, pomodoroProperties.propertiesToUpdate[property]);
    });
}

export function deletePomodoro(state, pomodoroId) {
  Vue.delete(state.pomodoros, pomodoroId);
}
