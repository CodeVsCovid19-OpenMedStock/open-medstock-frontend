<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-1 font-weight-bold mb-3">Supply</h1>

        <router-link to="/supply/1/edit">
          <v-btn block raised color="primary" class="mt-10">Update</v-btn>
        </router-link>

        <v-divider class="my-10"></v-divider>

        <h2>Can you supply any of these drugs?</h2>

        <drug-list></drug-list>
        <!-- <router-link to="/supply/1/add">
          <v-btn block raised color="primary" class="mt-10">Add</v-btn>
        </router-link> -->

        <router-link to="/">back</router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DrugList from '@/components/DrugList';

export default {
  components: {
    DrugList
  }
}
</script>
