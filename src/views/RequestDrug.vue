<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-1 font-weight-bold mb-3">Plaquenil</h1>

     

        <v-divider class="my-10"></v-divider>

        <h2>Institutions with Plaquenil on Stock</h2>

        <drug-list-request></drug-list-request>

        <router-link to="/">back</router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DrugListRequest from '@/components/DrugRequestDetail';

export default {
  components: {
    DrugListRequest
  }
}
</script>
