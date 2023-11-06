<template>
  <br />
  <br />
  <q-card
    class="mycard"
    style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
  >
    <q-card-section>
      <div class="text-h6">About Me :</div>
      <div class="text-subtitle2"></div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ about }}
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "AboutMe",
  setup() {
    return {
      about:
        " About Me : I am from Nagpur and graduated from Yeshwantrao Chavan College of Engineering, Nagpur With a degree in Electronics and Telecommunication Engineering and I had done my final year project in Image Processing with which we have createda pothole detection system ",
    };
  },
});
</script>
