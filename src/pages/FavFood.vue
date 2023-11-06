<template>
  <br />
  <br />
  <q-card
    class="mycard1"
    style="background: radial-gradient(circle, #35a2ff 0%, #41c47c 100%)"
  >
    <q-card-section>
      <div class="text-h6">Favorite Food</div>
      <div class="text-subtitle2"></div>
      <div>
        <ul>
          <li>Chicken Saoji</li>
          <li>Mutton Saoji</li>
          <li>Alfredo Pasta</li>
          <li>Aloo Jeera fry</li>
        </ul>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ food }}
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutMe",
  setup() {
    return {
      food: "",
    };
  },
});
</script>
