<template>
  <div>
    <h2>Institutions with Plaquenil on Stock</h2>
    <br />
    <v-card v-for="supplier in stock" :key="supplier.id" class="mb-4">
      <v-card-title>{{ supplier.supplier.institution_name }}</v-card-title>
      <v-card-text class="text-left">
        <v-icon medium>mdi-account</v-icon>
        Contact: {{ supplier.supplier.contact_person }}
        <br />
        <v-icon medium>mdi-phone</v-icon>
        Phone: {{ supplier.supplier.phone_number }}
        <br />
        <v-icon medium>mdi-phone</v-icon>
        Mobile: {{ supplier.supplier.mobile_number }} 
      </v-card-text>
      
        <v-card-text v-for="stockitem in supplier.medicine.stock " :key="stockitem.id" class="text-left">
          <v-divider></v-divider><br>
          <v-icon medium>mdi-package-variant-closed</v-icon> <b> {{ stockitem.amount_packages }} Packages </b>{{ supplier.medicine.medicine_name }} 
                      {{ stockitem.unit_size }}{{ stockitem.unit }}  
                      Units Per Package: {{ stockitem.amount_units }} (GTIN: {{ stockitem.gtin }})
          
        </v-card-text>
    </v-card>
  </div>
</template>

<script>
import http from "@/core/http";

export default {
  data() {
    return {
      stock: []
    };
  },
  async mounted() {
    http.get("/stock/1234").then(response => {
      this.stock = response.data;
    });
  }
};
</script>
