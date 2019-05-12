<template>
  <button class="rounded-button" @click="onClick()">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'RoundedButton',
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
.rounded-button {
  all: unset;
  width: 5rem;
  height: 5rem;
  padding: 10px;
  background-color: var(--application-color-accent);
  border-radius: 50%;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
</style>
