<template>
  <div>
    <h2>Institutions with Plaquenil on Stock</h2>
    <br />
    <v-card v-for="supplier in stock" :key="supplier.id" class="mb-4">
      <v-card-title>{{ supplier.supplier.institution_name }}</v-card-title>

      <v-list dense>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>fas fa-user</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="text-left">
            <v-list-item-title>
              Contact: {{ supplier.supplier.contact_person }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>fas fa-phone-alt</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="text-left">
            <v-list-item-title>
              Phone: {{ supplier.supplier.phone_number }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-action></v-list-item-action>
          <v-list-item-content class="text-left">
            <v-list-item-title>
              Mobile: {{ supplier.supplier.mobile_number }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list :three-line="true" dense>
        <v-list-item
          three-line
          v-for="(stock, i) in supplier.medicine.stock" :key="i"
        >
          <v-list-item-icon>
            <v-icon>fas fa-box</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="text-left">
            <v-list-item-title>
              {{ stock.amount_packages }} packages
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ stock.amount_units }} x {{ stock.unit_size }} {{ stock.unit }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              GTIN: {{ stock.gtin }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
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
    http.get(`/stock/${this.$route.params.id}`).then(response => {
      this.stock = response.data;
    });
  }
};
</script>
