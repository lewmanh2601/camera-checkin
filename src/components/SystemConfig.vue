<template>
  <v-container>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" lg="6">
            <v-text-field v-model="recognitionBar" label="Ngưỡng xác nhận " required></v-text-field>
          </v-col>

          <v-col cols="12" lg="6">
            <v-text-field v-model="closestBar" label="Ngưỡng gần nhất:" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="6">
            <v-text-field v-model="cacheFrames" label="Số lượng Cache Frame: " required></v-text-field>
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field v-model="cacheFramesBar" label="Ngưỡng Cache Frame: " required></v-text-field>
          </v-col>
        </v-row>
        <div class="text-center">
          <v-btn type="Submit" color="primary" center>Lưu cấu hình</v-btn>
        </div>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "SystemConfig",
  data() {
    return {
      recognitionBar: "",
      closestBar: "",
      cacheFrames: "",
      cacheFramesBar: ""
    };
  }
};
</script>

<style lang="scss" scoped>
</style>