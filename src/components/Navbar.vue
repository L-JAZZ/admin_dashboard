<template >
  <v-app-bar
      app
      color="white"
      flat
  >

    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <img src="LOGO.svg" alt="asd" width="100">

    <v-spacer></v-spacer>

    <v-btn
        tile
        class="mr-2 ml-2"
        elevation="0"
        dark
        large
        to="/"
    >
      <span>Выход</span>

    </v-btn>

    <v-btn
        elevation="0"
        class="mr-2 ml-2 transparent"
        width="15px"
        id="d1"
    >
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn
        elevation="0"
        class="mr-2 ml-2 transparent"
        id="d2"

    >
      <v-icon>mdi-bell</v-icon>
    </v-btn>

    <v-btn
        elevation="0"
        class="mr-2 ml-2 transparent"
        id="d3"
    >
      <v-icon>mdi-wrench</v-icon>
    </v-btn>

    <h3 class="ml-5">{{ name }} {{ surname }}</h3>
    <div class="mr-5">
      <v-icon class="ml-3" large>mdi-account-circle</v-icon>
    </div>

  </v-app-bar>

</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    name:'Имя',
    surname:'Фамилия',
    drawer: false,
    group: null,
  }),
  beforeUpdate() {

  }
}
</script>

<style scoped>
#d1,#d2,#d3{
  width: 36px;
  min-width: 36px;
}
</style>
