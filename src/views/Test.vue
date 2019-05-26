<template>
  <section class="welcome">
    <p>isLoggedIn: {{ isLoggedIn }}</p>
    <p>User: {{ email }} {{ id }}</p>
    <p>Authentication: {{ accessToken }}</p>
  </section>
</template>

<script>
export default {
  name: 'Test',
  computed: {
    email() {
      const userInstance = this.$store.state.user.user || {};
      return userInstance.get && userInstance.get('email');
    },
    id() {
      const userInstance = this.$store.state.user.user || {};
      return userInstance.get && userInstance.get('id');
    },
    accessToken() {
      return this.$store.state.user.authentication.accessToken;
    },
    isLoggedIn() {
      return this.$store.getters['user/isLoggedIn'];
    },
  },
};
</script>
