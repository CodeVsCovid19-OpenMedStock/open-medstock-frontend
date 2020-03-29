<template>
  <v-container class="text-center">
    <h1 class="display-1 font-weight-bold mb-4">Listed Drugs</h1>

    <v-skeleton-loader
      v-if="loading"
      type="card-heading, list-item-three-line"
    ></v-skeleton-loader>
    <drug-list-request :stock="stock" :loading="loading"></drug-list-request>
  </v-container>
</template>

<script>
import http from "@/core/http";
import DrugListRequest from "@/components/DrugListRequest";

export default {
  components: {
    DrugListRequest
  },

  data() {
    return {
      stock: [],
      loading: false
    };
  },

  async mounted() {
    this.loadStock();
  },

  methods: {
    loadStock() {
      this.loading = true;
      http
        .get("/medicine/instock")
        .then(response => {
          this.stock = response.data;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    }
  }
};
</script>
