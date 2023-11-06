<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Harsh Khanorkar
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab to="/harsh/AboutMe" label="About Me" />
        <q-route-tab to="/harsh/Hobbies" label="Hobbies" />
        <q-route-tab to="/harsh/Food" label="Fav Food" />
        <q-route-tab to="/harsh/Achmnt" label="Achievements" />
        <q-route-tab to="/harsh/Educatio_n" label="Skills" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
