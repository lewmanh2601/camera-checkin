<template>
  <v-navigation-drawer
    permanent
    expand-on-hover
    color="black"
    dark
    height="725px"
    class="pl-1"
  >
    <v-list nav dense>
      <v-list-item two-line class="px-0">
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/81.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>CAMERA CHECKIN</v-list-item-title>
          <v-list-item-title>Face recognition</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item link to="/">
        <v-list-item-icon>
          <v-icon>mdi-camera</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Theo dõi trực tuyến</v-list-item-title>
      </v-list-item>

      <v-list-item link to="list">
        <v-list-item-icon>
          <v-icon>mdi-clipboard-list</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Danh sách ra vào</v-list-item-title>
      </v-list-item>

      <v-list-item link to="report">
        <v-list-item-icon>
          <v-icon>mdi-chart-bar</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Báo cáo thống kê</v-list-item-title>
      </v-list-item>

      <v-list-item link to="addData">
        <v-list-item-icon>
          <v-icon>mdi-badge-account-horizontal</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Thêm dữ liệu</v-list-item-title>
      </v-list-item>

      <v-list-item link to="updateData">
        <v-list-item-icon>
          <v-icon>mdi-pencil-box</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Cập nhật dữ liệu</v-list-item-title>
      </v-list-item>

      <v-list-item link to="config">
        <v-list-item-icon>
          <v-icon>mdi-cogs</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Cấu hình</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Drawer",
};
</script>

<style lang="scss" scoped></style>
