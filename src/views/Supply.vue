<template>
  <v-container class="text-center">
    <h1 class="display-1 font-weight-bold mb-4">Supply</h1>

    <v-skeleton-loader
      type="list-item-avatar-two-line@2"
      v-if="loading"
    ></v-skeleton-loader>

    <div v-if="stock.length">
      <h2 class="mb-4">You are currently offering</h2>
      <stock-list :stock="stock" :loading="loading"></stock-list>
      <v-divider class="mt-10 mb-6"></v-divider>
    </div>

    <h2 class="mb-4">Can you supply any of these drugs?</h2>

    <drug-list :drugs="drugs" :loading="loading"></drug-list>
  </v-container>
</template>

<script>
import DrugList from "@/components/DrugList";
import StockList from "@/components/StockList";
import http from "@/core/http";

export default {
  data() {
    return {
      stock: [],
      drugs: [],
      loading: false
    };
  },
  components: {
    DrugList,
    StockList
  },

  mounted() {
    this.loading = true;
    Promise.all([this.loadStock(), this.loadDrugs()]).then(() => {
      this.loading = false;
    });
  },

  methods: {
    loadStock() {
      return http.get("/supplier/stock").then(response => {
        this.stock = response.data;
      });
    },

    loadDrugs() {
      return http.get("/medicine").then(response => {
        this.drugs = response.data;
      });
    }
  }
};
</script>
