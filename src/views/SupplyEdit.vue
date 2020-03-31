<template>
  <v-container>
    <v-alert dense outlined type="error" v-if="error">
      Oops, something went wrong while saving. Please try again later.
      {{ error }}
    </v-alert>

    <v-skeleton-loader
      v-if="loading"
      class="mt-4"
      type="heading, list-item@5"
    ></v-skeleton-loader>

    <div v-if="!loading">
      <h1 class="headline font-weight-bold mb-4">{{ drug.name }}</h1>
      <p>{{ drug.description }}</p>

      <v-form v-if="!loading">
        <div v-for="(stockItem, i) in stock" :key="i" class="d-flex">
          <div class="flex-grow-1">
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

              <v-select
                label="Unit"
                :items="units"
                v-model="stockItem.unit"
                class="ml-4"
              ></v-select>
            </div>
          </div>
          <div class="pl-4">
            <v-btn icon title="Remove this stock item" @click="removeItem(i)">
              <v-icon>fas fa-times</v-icon>
            </v-btn>
          </div>
        </div>

        <div class="text-center">
          <v-btn outlined @click="addStock">Add another</v-btn>
          <span class="mx-4">or</span>
          <v-btn color="primary" @click="submit" :disabled="busy">Save</v-btn>
        </div>
      </v-form>
    </div>
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
      units: ["mg", "g", "ml"],
      drug: {},
      stock: [],
      error: "",
      busy: false,
      loading: false
    };
  },

  mounted() {
    this.loadDrug(this.$route.params.drug);
    this.loadStock(this.$route.params.drug);
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

    loadDrug(drugId) {
      http.get(`/medicine/${drugId}`).then(response => {
        this.drug = response.data;
      });
    },

    // todo: maybe we have to get medicine and stock separately, as user may not have stock
    loadStock(drugId) {
      this.loading = true;
      return http
        .get(`/supplier/stock/${drugId}`)
        .then(response => {
          if (response.data) {
            // this.drug = response.data.medicine;
            if (response.data.stock && response.data.stock.length > 0) {
              this.stock = response.data.stock;
            } else {
              this.addStock();
            }
          }
          this.loading = false;
        })
        .catch(err => {
          this.error = err;
          this.loading = false;
        });
    },

    addStock() {
      this.stock.push(newStock());
    },

    removeItem(index) {
      this.stock.splice(index, 1);
    }
  }
};
</script>
