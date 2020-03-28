<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-1 font-weight-bold mb-3">Listed Drugs</h1>

        <v-divider class="my-10"></v-divider>

        <drug-list-request></drug-list-request>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DrugListRequest from "@/components/DrugListRequest";

export default {
  components: {
    DrugListRequest
  }
};
</script>
