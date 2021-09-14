<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-end">


        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 "

          contain
          min-width="100"
          src="https://sary.com/img/logo-white-en%20copy.3257bb2a.svg"
          width="100"
        />
         <div class="font-weight-bold  mx-3" >Super Heros System</div>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://www.notion.so/sary/Hazem-Nabil-Frontend-Task-a687a77f5c444998a7e211d248a045d5"
        target="_blank"
        text
      >
        <span class="mr-2 hidden-sm-and-down">The assignment details</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>
