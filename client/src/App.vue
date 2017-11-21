<template>
  <div id="root">
    <b-navbar toggleable="md" type="dark" variant="dark" class="justify-start">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand class="ml-3" to="/" left> NavBar</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-for="item in menuIcons" :key="item.title" :to="item.path">
            <i :class="item.icon"></i>
            {{item.title}}
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sideNav: false,
        menuIcons: [
          { icon: "fa fa-user", title: "Create user", path: '/create' },
          { icon: "fa fa-users", title: "List users", path: '/list-users' }
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import 'app';

  #root {
    font-family: Roboto, sans-serif;
    font-size: 16px;
  }

  a {
    color: black
  }

</style>
