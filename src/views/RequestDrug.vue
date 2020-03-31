<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="headline font-weight-bold mb-4">
          Institutions with {{ drug.name }} on stock
        </h1>
        <drug-list-request></drug-list-request>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import http from "@/core/http";
import DrugListRequest from "@/components/DrugRequestDetail";

export default {
  components: {
    DrugListRequest
  },

  data() {
    return {
      drug: {}
    };
  },

  mounted() {
    this.loadDrug(this.$route.params.id);
  },

  methods: {
    loadDrug(drugId) {
      http.get(`/medicine/${drugId}`).then(response => {
        this.drug = response.data;
      });
    }
  }
};
</script>
