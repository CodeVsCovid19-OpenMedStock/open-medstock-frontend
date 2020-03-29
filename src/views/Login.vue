<template>
  <v-container>
    <h1 class="headline font-weight-bold mb-3">Login</h1>

    <p>Please log in first in order to register your supply</p>

    <v-form class="mt-4">
      <v-text-field label="E-Mail" required></v-text-field>
      <v-text-field label="Password" type="password" required></v-text-field>

      <v-btn block class="mt-4" color="primary" :disabled="busy" @click="login">
        Login
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      busy: false
    };
  },

  methods: {
    login() {
      this.busy = true;
      setTimeout(() => {
        this.$router.push({ name: "Supply" });
        this.busy = false;
      }, 500);
    }
  }
};
</script>
