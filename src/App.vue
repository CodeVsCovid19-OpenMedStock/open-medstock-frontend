<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/CodeVsCovid19-OpenMedStock/open-medstock-frontend"
        target="_blank"
        text
      >
        <span class="mr-2">Github</span>
        <v-icon>fab fa-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
