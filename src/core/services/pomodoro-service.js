class PomodoroService {
  constructor(apiService) {
    this.apiService = apiService;
    this.API_URL = '/pomodoro';
  }

  create(pomodoro) {
    return this.apiService.post(
      this.API_URL,
      pomodoro,
    );
  }

  get(pomodoroId) {
    // https://pomodoro.com/pomodoro/1231231-1239182
    return this.apiService.get(
      `${this.API_URL}/${pomodoroId}`,
    );
  }

  update(pomodoroId, propertiesToUpdate) {
    return this.apiService.put(
      `${this.API_URL}/${pomodoroId}`,
      propertiesToUpdate,
    );
  }

  delete(pomodoroId) {
    return this.apiService.delete(
      `${this.API_URL}/${pomodoroId}`,
    );
  }
}

export default PomodoroService;
