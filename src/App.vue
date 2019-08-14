<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <template v-if="existsErrorMessages">
        <v-alert type="error" v-for="message in errorMessages" :key="message">
          {{ message }}
        </v-alert>
      </template>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
  computed: {
    errorMessages() {
      return this.$store.getters.errorMessages;
    },
    existsErrorMessages() {
      return this.$store.getters.errorMessages.length !== 0;
    },
  },
};
</script>
