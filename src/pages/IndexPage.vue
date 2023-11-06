<template>
  <!-- <q-page class="flex flex-center"> -->
  <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    > -->
  <!-- <h> Hii this is harsh </h>
    what are your hobbies -->
  <!-- </q-page> -->
  <div id="q-app" style="min-height: 20vh">
    <div class="q-pa-md q-gutter-sm">
      <q-banner rounded :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'">
        <template v-slot:avatar>
          <!-- <img
            src="https://cdn.quasar.dev/img/mountains.jpg"
            style="width: 100px; height: 100px"
          /> -->
        </template>

        <h> <b style="font-size: 1000px, padding: 2rem 0rem">Profile</b></h>
        <!-- <template v-slot:action>
          <q-btn flat label="Retry"></q-btn>
        </template> -->
      </q-banner>
    </div>
  </div>
  <!-- ------------------------------------------------------------------------------------------------ -->

  <div id="q-app" style="min-height: 70vh">
    <q-card class="my-card">
      <img src="src\assets\harsh (1).jpg" />

      <q-card-section>
        <div class="text-h6">Harsh Khanorkar</div>
        <div class="text-subtitle2">Associate Trainee LTIM</div>
        <!-- <q-btn
          color="white"
          text-color="black"
          label="About Me "
          @click="$router.push('/about')"
        /> -->
      </q-card-section>
    </q-card>
  </div>
  <!-- <________________________________________________________________________________________________> -->
  <!-- <div id="q-app" style="min-height: 100vh">
    <div class="q-pa-md">
      <q-card class="">
        <q-parallax
          src="src\assets\maxresdefault.jpg"
          :height="300"
        ></q-parallax>

        <q-card-section>
          <div class="text-h6">My CITY : NAGPUR</div>
          <div class="text-subtitle2"></div>
        </q-card-section>
      </q-card>
    </div>
  </div> -->
  <!-- <q-card
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

  <q-card
    class="mycard1"
    style="background: radial-gradient(circle, #35a2ff 0%, #41c47c 100%)"
  >
    <q-card-section>
      <div class="text-h6">Hobbies :</div>
      <div class="text-subtitle2"></div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ Hobbies }}
    </q-card-section>
  </q-card>
  <q-card
    class="mycard1"
    style="background: radial-gradient(circle, #35a2ff 0%, #41c47c 100%)"
  >
    <q-card-section>
      <div class="text-h6">Favorite Food</div>
      <div class="text-subtitle2"></div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ food }}
    </q-card-section>
  </q-card>
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
  </q-card> -->
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      lorem: "About My self :  ",
      about:
        " About Me : I am from Nagpur and graduated from Yeshwantrao Chavan College of Engineering, Nagpur With a degree in Electronics and Telecommunication Engineering and I had done my final year project in Image Processing with which we have createda pothole detection system ",
      Hobbies: " I love To Play cricket , watch movies and swimming ",
      food: " Chicken Soaji , Mutton Saoji , Pavbhaji , Chole Bhature , Rohu Fish",
      sport: " Won Inter College cricket Tournament",
    };
  },
});
</script>

<style lang="sass">

.my-card
  display: block
  margin-left: auto
  margin-right: auto
  width: 200px
  height: 200px
.mycard
  align-content: center
  align: flex-center
  width: 100%
  max-width: 800px
.mycard1
  align-content: center
  width: 100%
  max-width: 800px
  margin : 2rem 0rem
</style>
