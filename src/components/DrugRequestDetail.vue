<template>
  <div>
    <v-card v-for="drug in drugs" :key="drug.id" class="mb-4">
          <v-card-title>Dr. Müller, 8005 Zürich</v-card-title>
          <v-card-text class="text-left">
            <v-icon medium>mdi-phone</v-icon> Tel: 079 563 53 52 
            
            </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <v-card-text class="text-left ">
            Dafalgan 500 MG (GTIN: AEHE2929293) <br> 
            Units Per Package: 50 <br> 
            Packages on Stock: 33 
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-text class="text-left ">
            Dafalgan 500 MG (GTIN: AEHE2929293) <br> 
            Units Per Package: 50 <br> 
            Packages on Stock: 33 
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-text class="text-left ">
            Dafalgan 500 MG (GTIN: AEHE2929293) <br> 
            Units Per Package: 50 <br> 
            Packages on Stock: 33 
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-text class="text-left ">
            Dafalgan 500 MG (GTIN: AEHE2929293) <br> 
            Units Per Package: 50 <br> 
            Packages on Stock: 33 
          </v-card-text>  
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
