<template>
  <section class="welcome">
    <div class="application__content welcome__content">
      <h1 class="welcome__title">
        Hola, ¡bienvenido a POMODORO!
      </h1>
      <h2 class="welcome__subtitle">
        Mejora tu productividad centrándote en lo importante de cada momento y sé más eficiente
      </h2>

      <Button @click="onClick()">
        Haz tu primer pomodoro
      </Button>
    </div>
  </section>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: 'Home',
  components: {
    Button,
  },
  methods: {
    onClick() {
      this.$router.push({ name: 'pomodoro', params: { type: 'work' } });
    },
  },
};
</script>

<style lang="scss" scoped>
.welcome {
  background-color: var(--application-color-primary);
}

.welcome__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--application-color-text);
}

.welcome__title,
.welcome__subtitle {
  text-align: left;
}

.welcome__title {
  margin-bottom: 1.2em;
  font-size: 2.5rem;
  font-weight: 500;
  letter-spacing: 1px;
}

.welcome__subtitle {
  margin-bottom: 1.2em;
  font-size: 2rem;
  font-weight: 300;
}
</style>
