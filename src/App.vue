<template>
  <v-app>

    <router-view></router-view>

    <div v-if="vis">
      <Navbar/>
    </div>

  </v-app>

</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: 'App',

  data: () => ({
    vis: true
  }),

  components: {
    Navbar,
  },

  methods: {},

  // need to fix visibility of navbar on login page

  // updated() {
  //   if(this.$router.currentRoute.toLocaleString().localeCompare('/')) {
  //     this.vis = false
  //     console.log('navbar disabled')
  //   }else {
  //     this.vis = true
  //   }
  // },


};
</script>

<style>

</style>
