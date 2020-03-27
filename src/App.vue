<template>
  <div id="app">
    <div class="container mx-auto">
      <h1 class="text-4xl font-semibold">Patient Zero</h1>

      <div class="text-center">
        <div>
          <btn>Ich habe Medikamente</btn>

          <btn>Ich brauche Medikamente</btn>
        </div>
      </div>

      <router-view />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  components: {
    btn: Button
  }
};
</script>
