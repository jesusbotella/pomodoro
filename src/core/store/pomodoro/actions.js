/* eslint-disable */
import ApiService from '@/core/services/api-service';
import PomodoroModel from '@/core/models/pomodoro';
import PomodoroService from '@/core/services/pomodoro-service';

const pomodoroService = new PomodoroService(ApiService);

export function createPomodoro(context, properties) {
  const pomodoro = new PomodoroModel(properties);

  return pomodoroService.create(pomodoro)
    .then(() => {
      context.commit('addPomodoro', pomodoro);
    })
    .catch(error => {
      console.log('Something wrong happened!', error);
    });
}

export function updatePomodoro(context, properties) {
  return pomodoroService.update(
      properties.id,
      properties.propertiesToUpdate
    )
    .then(() => {
      context.commit('updatePomodoro', properties);
    })
    .catch(error => {
      console.log('Something wrong happened!', error);
    });
}

export function deletePomodoro(context, pomodoroId) {
  return pomodoroService.delete(pomodoroId)
    .then(() => {
      context.commit('deletePomodoro', pomodoroId);
    })
    .catch(error => {
      console.log('Something wrong happened!', error);
    });
}
