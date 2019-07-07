<template>
  <section>
    <ul>
      <li v-for="pomodoro in pomodoros" :key="pomodoro.id">
        {{ pomodoro }}
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
      console.log('createPomodoro');
      this.$store.dispatch('pomodoro/createPomodoro', {
        type: 'work',
        description: 'Test description fake',
        profile: 'fake profile2',
        categories: ['category2', 'category3'],
      });
    }
  }
};
</script>
