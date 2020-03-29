<template>
  <v-container class="text-center">
    <h1 class="headline font-weight-bold mb-3">Welcome to OpenMedStock</h1>

    <h2 class="title font-weight-light font-italic mb-4">
      Exchange life-saving meds
    </h2>

    <p>Please select wheather you can provide or need meds</p>

    <router-link to="/request">
      <v-btn block raised color="primary" class="mt-10">I need meds</v-btn>
    </router-link>

    <router-link to="/supply">
      <v-btn block raised color="primary" class="mt-10">
        I can provide meds
      </v-btn>
    </router-link>
  </v-container>
</template>
