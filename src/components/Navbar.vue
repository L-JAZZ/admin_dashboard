<template>
  <v-app-bar
      app
      color="transparent"
      flat
  >
    <img src="LOGO.svg" alt="asd" width="100">

    <v-spacer></v-spacer>

    <v-btn
        tile
        class="mr-2 ml-2"
        elevation="0"
        dark
        large
    >
      <span>Выход</span>

    </v-btn>

    <v-btn
        elevation="0"
        class="mr-2 ml-2 transparent"
        width="15px"
        id="ddd"
    >
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn
        elevation="0"
        class="mr-2 ml-2 transparent"
        id="ddd"

    >
      <v-icon>mdi-bell</v-icon>
    </v-btn>

    <v-btn
        elevation="0"
        class="mr-2 ml-2 transparent"
        id="ddd"
    >
      <v-icon>mdi-wrench</v-icon>
    </v-btn>

    <h3 class="ml-5">Имя Фамилия</h3>
    <div class="mr-5">
      <v-icon class="ml-3" large>mdi-account-circle</v-icon>
    </div>

  </v-app-bar>

</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
#ddd{
  width: 36px;
  min-width: 36px;
}
</style>
