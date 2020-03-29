<template>
  <div>
    <v-card v-for="(drug, i) in drugs" :key="i" class="mb-4" :loading="loading">
      <v-card-title>{{ drug.name }}</v-card-title>
      <v-card-text class="text-left">
        {{ drug.description }}
      </v-card-text>
      <v-card-actions>
        <router-link
          :to="{ name: 'SupplyAdd', params: { drug: drug.medicine_id } }"
        >
          <v-btn text>Add Supply</v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    drugs: Array,
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>
