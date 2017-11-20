<template>
  <div id="root">
    <v-toolbar class="teal">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav">
      </v-toolbar-side-icon>
      <v-toolbar-items>
        <v-btn flat to="/">Home</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuIcons"
               :key="item.title"
               :to="item.path">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sideNav: false,
        menuIcons: [
          { icon: "create", title: "Create user", path: '/create' },
          { icon: "list", title: "List users", path: '/listusers' }
        ]
      }
    }
  }
</script>

<style lang="scss">
  #root {
    font-family: Roboto, sans-serif;
    font-size: 16px;
  }
  a {
    color: black
  }

</style>
