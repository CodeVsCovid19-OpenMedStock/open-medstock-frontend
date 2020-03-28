<template>
  <div>
    <v-card v-for="(drug, i) in stock" :key="i" class="mb-4">
      <v-card-title>{{ drug.medicine.medicine_name }}</v-card-title>

      <v-list dense>
        <v-list-item v-for="(stock, i) in drug.stock" :key="i">
          <v-list-item-icon>
            <v-icon>fas fa-box</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="text-left">
            <v-list-item-title>
              {{ stock.amount_packages }} Packages
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ stock.amount_units }} x {{ stock.unit_size }} {{ stock.unit }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-card-actions>
        <router-link
          :to="{
            name: 'SupplyEdit',
            params: { drug: drug.medicine.medicine_id }
          }"
        >
          <v-btn text>Edit Supply</v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import http from "@/core/http";

export default {
  props: {
    stock: Array
  },

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
