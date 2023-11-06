<template>
  <div>
    <br />
    <br />
    <q-card
      class="mycard1"
      style="background: radial-gradient(circle, #35a2ff 0%, #41c47c 100%)"
    >
      <q-card-section>
        <div class="text-h6">Hobbies :</div>
        <div class="text-subtitle2"></div>
        <div></div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ Hobbies }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutMe",
  setup() {
    return {
      Hobbies: " I love To Play cricket , watch movies and swimming ",
    };
  },
});
</script>
