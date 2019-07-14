<template>
  <section>
    <ul>
      <li v-for="pomodoro in pomodoros" :key="pomodoro.id">
        {{ pomodoro }}

        <button
          @click="updatePomodoro(pomodoro, { type: 'rest' })">
          Update Pomodoro
        </button>

        <button @click="deletePomodoro(pomodoro.get('id'))">Delete Pomodoro</button>
      </li>
    </ul>

    <button @click="createPomodoro">Create Pomodoro</button>
  </section>
</template>

<script>

export default {
  name: 'PomodoroList',
  computed: {
    pomodoros() {
      return this.$store.state.pomodoro.pomodoros;
    },
  },
  methods: {
    createPomodoro() {
      this.$store.dispatch('pomodoro/createPomodoro', {
        type: 'work',
        description: 'Test description fake',
        profile: 'fake profile2',
        categories: ['category2', 'category3'],
      });
    },

    updatePomodoro(pomodoro, propertiesToUpdate) {
      const updateData = {
        id: pomodoro.get('id'),
        propertiesToUpdate,
      };

      this.$store.dispatch(
        'pomodoro/updatePomodoro',
        updateData,
      );
    },

    deletePomodoro(pomodoroId) {
      this.$store.dispatch('pomodoro/deletePomodoro', pomodoroId);
    },
  },
};
</script>
