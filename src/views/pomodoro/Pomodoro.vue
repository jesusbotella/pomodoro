<template>
  <section class="pomodoro">
    <div class="application__content pomodoro__content">
      <h2 class="pomodoro__title">Pomodoro</h2>
      <h1 class="pomodoro__type">{{ pomodoroType }}</h1>

      <Timer class="pomodoro__timer" :time="pomodoroTime" />

      <RoundedButton @click="onClick()">
        <ion-icon name="close"></ion-icon>
      </RoundedButton>
    </div>
  </section>
</template>

<script>
import Timer from '@/components/Timer.vue';
import PomodoroTypes from './pomodoroTypes';
import RoundedButton from '@/components/RoundedButton.vue';

export default {
  name: 'Pomodoro',
  components: {
    Timer,
    RoundedButton,
  },
  computed: {
    pomodoroType() {
      return this.$route.params.type;
    },
    pomodoroTime() {
      return PomodoroTypes[this.pomodoroType].time;
    },
  },
  methods: {
    onClick() {
      this.$router.push({ name: 'pomodoro', params: { type: 'rest' } });
    },
  },
};
</script>

<style lang="scss" scoped>
.pomodoro {
  background-color: var(--application-color-primary);
  color: var(--application-color-text);
}

.pomodoro__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.pomodoro__title {
  font-size: 1rem;
  text-transform: uppercase;
}

.pomodoro__type {
  margin-bottom: 2rem;
  font-size: 4rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.pomodoro__timer {
  margin-bottom: 3rem;
  font-size: 8rem;
  font-weight: 800;
}

ion-icon {
  font-size: 64px;
}
</style>
