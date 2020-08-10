<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click.stop="$emit('toggle-drawer')">
    </v-app-bar-nav-icon>
    <h2>Camera checkin</h2>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
};
</script>

<style lang="scss" scoped></style>
