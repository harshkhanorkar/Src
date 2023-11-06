<template>
  <br>
  <br>
  <q-card
    class="mycard1"
    style="background: radial-gradient(circle, #35a2ff 0%, #41c47c 100%)"
  >
    <q-card-section>
      <div class="text-h6">Sports Achievement</div>
      <div class="text-subtitle2"></div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ sport }}
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Ac_h",
  setup() {
    return {
      sport: " Won Inter College cricket Tournament",
    };
  },
});
</script>
