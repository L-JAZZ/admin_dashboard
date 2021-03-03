<template>
  <v-app-bar
      app
      color="transparent"
      flat
  >
    <div>
      <h1 class="black--text">Admin page</h1>
    </div>

    <v-spacer></v-spacer>

    <v-btn
        tile
        class="mr-2 ml-2"
        elevation="0"
        dark
    >
      <span class="mr-2">Выход</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>

    <v-btn
        elevation="0"
        class="mr-2 ml-2"
    >
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn
        elevation="0"
        class="mr-2 ml-2"
    >
      <v-icon>mdi-bell</v-icon>
    </v-btn>

    <v-btn
        elevation="0"
        class="mr-2 ml-2"
    >
      <v-icon>mdi-settings-applications</v-icon>
    </v-btn>

  </v-app-bar>

</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>
