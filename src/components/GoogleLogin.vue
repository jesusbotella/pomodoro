<template>
  <div ref="googleButton" class="g-signin2"></div>
</template>

<script>
export default {
  name: 'GoogleLogin',
  mounted() {
    const { googleButton } = this.$refs;

    window.gapi.load('auth2', () => {
      const auth2 = window.gapi.auth2.init({
        client_id: process.env.VUE_APP_GOOGLE_LOGIN_CLIENT_ID,
      });

      // Sign the user in, and then retrieve their ID.
      auth2.attachClickHandler(
        googleButton, {},
        user => this.onSuccess(user),
        error => this.onFailure(error),
      );
    });
  },
  methods: {
    onSuccess(user) {
      this.$emit('success', user);
    },

    onFailure(error) {
      this.$emit('error', error);
    },
  },
};
</script>
