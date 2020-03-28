<template>
  <div>
    <v-card v-for="drug in drugs" :key="drug.id" class="mb-4">
      <v-card-title>{{ drug.name }}</v-card-title>
      <v-card-text class="text-left">{{ drug.description }}</v-card-text>
      <v-card-actions>
        <router-link :to="{ name: 'SupplyAdd', params: { drug: drug.id } }">
          <v-btn text>Add Supply</v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import http from "@/core/http";

export default {
  data() {
    return {
      drugs: []
    };
  },
  async mounted() {
    http.get("/medicine").then(response => {
      this.drugs = response.data;
    });
  }
};
</script>
