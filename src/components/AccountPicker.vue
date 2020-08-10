<template>
  <v-container>
    <h3>Chọn tài khoản</h3>
    <v-autocomplete label="Choose account..." :items="users" dense />
  </v-container>
</template>

<script>
export default {
  name: "AccountPicker",
  data() {
    return {
      users: ["User 1", "User 2", "User 3", "User 4"],
    };
  },
};
</script>

<style lang="scss" scoped></style>
