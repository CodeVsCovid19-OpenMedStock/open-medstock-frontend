<template>
  <div>
    <v-card v-for="(drug, i) in drugs" :key="i" class="mb-4">
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-card-title>{{ drug.name }}</v-card-title>
          <v-card-text class="text-left">{{ drug.description }}</v-card-text>
        </v-col>
        <v-col cols="auto">
          <v-chip class="ma-2" color="teal" text-color="white">
            <v-avatar left>
              <v-icon>fas fa-check-circle</v-icon>
            </v-avatar>500 in Stock
          </v-chip>
        </v-col>
      </v-row>

      <v-card-actions>
        <router-link :to="{ name: 'RequestDrug', params: { id: drug.id } }">
          <v-btn text>Request Supply</v-btn>
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
