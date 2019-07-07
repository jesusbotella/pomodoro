/* eslint-disable */
import PomodoroModel from '@/core/models/pomodoro';

export function createPomodoro(context, properties) {
  const pomodoro = new PomodoroModel(properties);
  context.commit('addPomodoro', pomodoro);
}

