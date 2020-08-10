<template>
  <v-container>
    <v-select v-model="selectedOption" :items="cameras" label="Chọn camera"></v-select>
    <v-row>
      <v-col cols="12" lg="6">
        <v-text-field v-model="link" label="Đường dẫn" readonly></v-text-field>
      </v-col>
      <v-col cols="12" lg="6" class="mt-3" v-if="selectedOption=='Video test'">
        <v-file-input
          show-size
          counter
          dense
          accept=".mp4"
          label="UPLOAD VIDEO ( ĐỊNH DẠNG FILE YÊU CẦU: MP4, AVI .KÍCH THƯỚC TỐI ĐA: 150MB; CÁC FILE VIDEO ĐỊNH DẠNG KHÁC .MP4 SẼ TỰ ĐỘNG CONVERT VỀ .MP4 NÊN QUÁ TRÌNH UPLOAD CÓ THỂ MẤT VÀI PHÚT)"
          placeholder="Choose a video"
        ></v-file-input>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-img
        class="img"
        v-if="selectedOption=='Camera ra'"
        alt="Ảnh camera ra"
        src="https://cameracheckin.icomm.vn/static/img/1590220285.8203547.jpg"
      ></v-img>
      <v-img
        class="img"
        v-if="selectedOption=='Camera vào'"
        alt="Ảnh camera vào"
        src="https://cameracheckin.icomm.vn/static/img/1591927960.373626.jpg"
      ></v-img>
      <v-img
        class="img"
        v-if="selectedOption=='Video test'"
        alt="Ảnh video test"
        src="https://cameracheckin.icomm.vn/static/img/1591863868.0402.jpg"
      ></v-img>
    </v-row>
    <v-row justify="center" class="mt-3">
      <v-btn color="primary" center>Lấy lại ảnh cấu hình</v-btn>
      <v-btn ty pe="Reset" color="primary" center>Clear</v-btn>
      <v-btn type="Submit" color="primary" center>Save</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CameraConfig",
  data() {
    return {
      cameras: ["Video test", "Camera ra", "Camera vào"],
      selectedOption: "Video test"
    };
  },
  computed: {
    link() {
      let abc;
      switch (this.selectedOption) {
        case "Video test":
          abc = "video test link";
          break;
        case "Camera ra":
          abc = "camera out link";
          break;
        default:
          abc = "camera in link";
          break;
      }
      return abc;
    }
  }
};
</script>

<style lang="scss" scoped>
.img {
  width: 480px;
  height: 480px;
  box-sizing: border-box;
  border: 1px solid black;
}
.text-center {
  text-align: center !important;
}
</style>