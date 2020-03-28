<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-1 font-weight-bold mb-3">{{ drug.name }}</h1>
        <p>{{ drug.description }}</p>

        <v-row no-gutters class="mt-5">
          <v-col md="6" offset-md="3">
            <v-divider></v-divider>

            <v-form>
              <v-text-field
                v-model="stock.gtin"
                label="GTIN Code"
                required
              ></v-text-field>

              <v-text-field
                v-model="stock.amount_packages"
                label="How many packages?"
                required
                type="number"
              ></v-text-field>

              <div class="d-flex">
                <v-text-field
                  v-model="stock.amount_units"
                  label="How many units per package?"
                  required
                  type="number"
                ></v-text-field>

                <v-radio-group v-model="stock.unit" row>
                  <v-radio label="mg" value="mg"></v-radio>
                  <v-radio label="ml" value="ml"></v-radio>
                </v-radio-group>
              </div>

              <v-btn color="primary" @click="submit">I can supply this drug</v-btn>
            </v-form>
          </v-col>
        </v-row>

        <!-- <router-link to="/supply">back</router-link> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import http from "@/core/http";
import { validationMixin } from "vuelidate";

export default {
  mixins: [validationMixin],

  data() {
    return {
      drug: {},
      stock: {
        gtin: "",
        amount_packages: "",
        amount_units: "",
        unit_size: "",
        unit: ""
      }
    };
  },

  mounted() {
    this.loadDrug(this.$route.params.drug);
  },

  methods: {
    submit() {
      http
        .put(`/medicine/${this.$route.params.drug}/stock`, this.stock)
        .then(response => {
          console.log(response);
        });
    },

    loadDrug(id) {
      http.get(`/medicine/${id}`).then(response => {
        this.drug = response.data;
      });
    }
  }
};
</script>
