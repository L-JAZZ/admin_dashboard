<template>
  <div>
    <v-app-bar
        app
        color="white"
        flat
    >
      <v-app-bar-nav-icon @click="drawer = true" class=""/>
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

      <span class="ml-5 font-weight-bold">{{ name }} {{ surname }}</span>
      <v-icon class="ml-3" large>mdi-account-circle</v-icon>

    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        dark
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group

        >
          <v-list-item disabled>
            <v-list-item-icon >
              <v-icon> </v-icon>
            </v-list-item-icon>

            <v-list-item-title>
              <h3>Admin panel</h3>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>

        <v-list-item-group
            v-model="group"
            active-class=""
        >
          <v-list-item
              v-for="(item,i) in navbarItems"
              :key="i"
              :to="item.url"
          >
            <v-list-item-icon >
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>

          </v-list-item>
        </v-list-item-group>

      </v-list>

    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    name: 'Имя',
    surname: 'Фамилия',
    drawer: false,
    group: null,

    navbarItems:[
      {
        icon: 'mdi-chart-pie',
        text: 'Платежи',
        url: '/payments'
      },
      {
        icon: 'mdi-ticket-outline',
        text: 'Банки',
        url: '/banks'
      },
      {
        icon: 'mdi-balloon',
        text: 'Терминалы',
        url: '/terminals'
      },
      {
        icon: 'mdi-account-multiple',
        text: 'Аккаунты',
        url: '/accounts'
      },{
        icon: 'mdi-account-box-multiple',
        text: 'Пользователи',
        url: '/users'
      },{
        icon: 'mdi-notebook-multiple',
        text: 'Дэшборд',
        url: '/dashboard'
      },



    ]
  }),
  beforeUpdate() {

  }
}
</script>

<style scoped>
#d1, #d2, #d3 {
  width: 36px;
  min-width: 36px;
}
</style>
