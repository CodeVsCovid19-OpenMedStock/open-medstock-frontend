<template>
  <v-app>
    <v-app-bar app color="primary" dark>
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

      <v-btn text class="ml-5" @click="goBack" v-if="notOnIntro">
        <v-icon left>fas fa-chevron-left</v-icon> back
      </v-btn>

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
      <v-row no-gutters class="mt-5">
        <v-col lg="6" md="8" offset-lg="3" offset-md="2">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-content>
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
