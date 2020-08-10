<template>
  <v-app id="app">
    <AppBar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" />

    <v-content>
      <v-row>
        <Drawer ref="drawer" />

        <transition-page>
          <router-view />
        </transition-page>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";
import Drawer from "./components/Drawer";
import TransitionPage from "./components/TransitionPage";

export default {
  name: "App",
  components: {
    AppBar,
    Drawer,
    TransitionPage,
  },
};
</script>
