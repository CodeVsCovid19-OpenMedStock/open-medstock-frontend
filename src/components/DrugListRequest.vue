<template>
  <div>
    <v-card v-for="(drug, i) in stock" :key="i" class="mb-4" :loading="loading">
      <v-card-title>{{ drug.name }}</v-card-title>
      <v-card-text class="text-left">
        {{ drug.description }}
      </v-card-text>

      <v-list dense>
        <v-list-item>
          <v-list-item-icon>
            <v-icon title="Manufacturer">fas fa-industry</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="text-left">
            <v-list-item-title class="text-capitalize">
              {{ drug.manufacturer }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon title="Substance">fas fa-prescription-bottle-alt</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="text-left">
            <v-list-item-title class="text-capitalize">
              {{ drug.substance }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-card-actions>
        <router-link :to="{ name: 'RequestDrug', params: { id: drug.medicine_id } }">
          <v-btn text>Request Supply</v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    stock: Array,
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>
