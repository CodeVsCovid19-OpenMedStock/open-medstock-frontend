<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="OpenMedStock Logo"
            class="shrink mr-2"
            contain
            src="@/assets/logo.png"
            transition="scale-transition"
            width="64"
          />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://devpost.com/software/openmedstock"
        target="_blank"
        text
      >
        <span class="mr-2">Devpost</span>
        <v-icon>fas fa-code</v-icon>
      </v-btn>

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
