<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to OpenMedStock</h1>

        <router-link to="/request">
          <v-btn block raised color="primary" class="mt-10">I need drugs</v-btn>
        </router-link>

        <router-link to="/supply">
          <v-btn block raised color="primary" class="mt-10">
            I can provide drugs
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>
