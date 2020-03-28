<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-1 font-weight-bold mb-3">Request</h1>

        <v-card to="/request/1">
          <v-card-title>Hydroxychloroquin</v-card-title>
          <v-card-text class="text-left">
            Hydroxychloroquine, sold under the brand name Plaquenil among others, is a medication used to prevent and treat malaria in areas where malaria remains sensitive to chloroquine. Other uses include treatment of rheumatoid arthritis, lupus, and porphyria cutanea tarda. It is taken by mouth.
          </v-card-text>
          <v-card-actions>
            <router-link to="/request/1">
              <v-btn text>Details</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>

        <v-card to="/request/1" class="mt-3">
          <v-card-title>Hydroxychloroquin</v-card-title>
          <v-card-text class="text-left">
            Hydroxychloroquine, sold under the brand name Plaquenil among others, is a medication used to prevent and treat malaria in areas where malaria remains sensitive to chloroquine. Other uses include treatment of rheumatoid arthritis, lupus, and porphyria cutanea tarda. It is taken by mouth.
          </v-card-text>
          <v-card-actions>
            <router-link to="/request/1">
              <v-btn text>Details</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>

        <router-link to="/">back</router-link>
      </v-col>
    </v-row>
  </v-container>
</template>
