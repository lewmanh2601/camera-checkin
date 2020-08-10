<template>
  <v-container>
    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab v-for="item in items" :key="item" @click="selectedTab = item">{{ item }}</v-tab>
    </v-tabs>
    <v-card v-if="selectedTab === 'Cấu hình hệ thống'">
      <SystemConfig />
    </v-card>
    <v-card v-if="selectedTab === 'Cấu hình Camera'">
      <CameraConfig />
    </v-card>
    <v-card v-if="selectedTab === 'Cấu hình khung giờ làm việc'">
      <WorkTimeConfig />
    </v-card>
  </v-container>
</template>

<script>
import SystemConfig from "../components/SystemConfig";
import WorkTimeConfig from "../components/WorkTimeConfig";
import CameraConfig from "../components/CameraConfig";

export default {
  name: "Config",
  components: {
    SystemConfig,
    CameraConfig,
    WorkTimeConfig
  },
  data() {
    return {
      selectedTab: "Cấu hình hệ thống",
      items: [
        "Cấu hình hệ thống",
        "Cấu hình Camera",
        "Cấu hình khung giờ làm việc"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>