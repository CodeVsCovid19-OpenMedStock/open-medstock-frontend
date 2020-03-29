<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-1 font-weight-bold mb-4">Supply</h1>

        <div v-if="stock.length">
          <h2 class="mb-4">You are currently offering</h2>
          <stock-list :stock="stock" :loading="loadingStock"></stock-list>
          <v-divider class="mt-10 mb-6"></v-divider>
        </div>

        <h2 class="mb-4">Can you supply any of these drugs?</h2>

        <drug-list></drug-list>
      </v-col>
    </v-row>
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
      loadingStock: false
    };
  },
  components: {
    DrugList,
    StockList
  },

  mounted() {
    this.loadingStock = true;
    // todo: we need the auth token in order to get the actual stock for the user
    http.get('/supplier/stock').then(response => {
      this.stock = response.data;
      this.loadingStock = false;
    });
  }
}
</script>
