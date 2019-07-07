/* eslint-disable no-param-reassign */
export function addPomodoro(state, pomodoro) {
  state.pomodoros = {
    ...state.pomodoros,
    [pomodoro.get('id')]: pomodoro,
  };
}

export function deletePomodoro() {

}
