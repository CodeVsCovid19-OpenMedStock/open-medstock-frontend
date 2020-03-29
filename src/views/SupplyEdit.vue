<template>
  <v-container>
    <v-alert dense outlined type="error" v-if="error">
      Oops, something went wrong while saving. Please try again later.
      {{ error }}
    </v-alert>

    <h1 class="display-1 font-weight-bold mb-3">{{ drug.name }}</h1>
    <p>{{ drug.description }}</p>

    <v-form>
      <div v-for="(stockItem, i) in stock" :key="i">
        <v-divider class="my-4"></v-divider>

        <v-text-field
          v-model="stockItem.gtin"
          label="GTIN Code"
          required
          hint="Global Trade Item Number (number beneath the barcode)"
        ></v-text-field>

        <v-text-field
          v-model="stockItem.amount_packages"
          label="How many packages?"
          required
          type="number"
        ></v-text-field>

        <v-text-field
          v-model="stockItem.amount_units"
          label="How many units per package?"
          required
          type="number"
        ></v-text-field>

        <div class="d-flex">
          <v-text-field
            v-model="stockItem.unit_size"
            label="Unit size"
            required
            type="number"
          ></v-text-field>

          <v-radio-group v-model="stockItem.unit" row class="ml-4">
            <v-radio label="mg" value="mg"></v-radio>
            <v-radio label="ml" value="ml"></v-radio>
          </v-radio-group>
        </div>
      </div>

      <div class="text-center">
        <v-btn outlined @click="addStock">Add another</v-btn>
        <span class="mx-4">or</span>
        <v-btn color="primary" @click="submit" :disabled="busy">Save</v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import http from "@/core/http";
import { validationMixin } from "vuelidate";

function newStock() {
  return {
    gtin: "",
    amount_packages: "",
    amount_units: "",
    unit_size: "",
    unit: ""
  };
}

export default {
  mixins: [validationMixin],

  data() {
    return {
      drug: {},
      stock: [newStock()],
      error: "",
      busy: false
    };
  },

  mounted() {
    this.loadDrug(this.$route.params.drug);
  },

  methods: {
    submit() {
      this.error = "";
      this.busy = true;

      http
        .put(`/medicine/${this.$route.params.drug}/stock`, this.stock)
        .then(() => {
          this.busy = false;
          this.$router.push("/supply");
        })
        .catch(err => {
          this.error = err;
          this.busy = false;
        });
    },

    loadDrug(id) {
      http.get(`/medicine/${id}`).then(response => {
        this.drug = response.data;
      });
    },

    addStock() {
      this.stock.push(newStock());
    }
  }
};
</script>
