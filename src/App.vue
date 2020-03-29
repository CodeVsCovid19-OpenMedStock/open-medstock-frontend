<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>
      <v-btn text @click="goBack" v-if="notOnIntro">
        <v-icon left>fas fa-chevron-left</v-icon> back
      </v-btn>

      <v-spacer></v-spacer>

      <router-link to="/">
        <v-img
          alt="OpenMedStock Logo"
          class="shrink"
          contain
          src="@/assets/logo-wide.png"
          transition="scale-transition"
          height="40"
        />
      </router-link>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-content>
      <v-row no-gutters class="mt-5">
        <v-col lg="6" md="8" offset-lg="3" offset-md="2">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-content>

    <v-bottom-navigation>
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
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  computed: {
    notOnIntro() {
      return this.$route.name !== "Intro";
    }
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>
