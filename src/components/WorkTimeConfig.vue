<template>
  <v-container>
    <v-text-field
      v-model="timeWithoutAlarm"
      type="number"
      label="Thời gian ở ngoài cảnh báo: "
      required
    ></v-text-field>
    <v-btn color="primary" @click="toggleForm">Thêm khung giờ</v-btn>
    <v-form @submit.prevent="submitTime" v-if="isVisibleForm">
      <v-row>
        <v-col cols="12" lg="5">
          <h4>Thời gian bắt đầu</h4>
          <vue-timepicker v-model="timeValue1" format="hh:mm A"></vue-timepicker>
        </v-col>
        <v-col cols="12" lg="5">
          <h4>Thời gian kết thúc</h4>
          <vue-timepicker v-model="timeValue2" format="hh:mm A"></vue-timepicker>
        </v-col>
        <v-col cols="12" lg="1" class="mt-4">
          <v-btn type="Submit" color="primary">Thêm</v-btn>
        </v-col>
        <v-col cols="12" lg="1" class="mt-4">
          <v-btn color="primary" @click="deleteRow">Xoá</v-btn>
        </v-col>
      </v-row>
    </v-form>
    <v-data-table
      v-model="selected"
      show-select
      :single-select="singleSelect"
      :headers="headers"
      :items="times"
      item-key="startTime"
      v-if="times.length>0"
    >
      <template v-slot:top>
        <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "WorkTimeConfig",
  data() {
    return {
      selected: [],
      singleSelect: false,
      timeWithoutAlarm: "",
      isVisibleForm: false,
      timeValue1: "",
      timeValue2: "",
      times: [],
      newTime: {},
      headers: [
        { text: "Thời gian bắt đầu", value: "startTime" },
        { text: "Thời gian kết thúc", value: "endTime" },
        { text: "#", value: "action" }
      ]
    };
  },
  methods: {
    submitTime() {
      this.newTime = {
        startTime: this.timeValue1,
        endTime: this.timeValue2,
        action: this.action
      };
      this.times.push(this.newTime);
    },
    toggleForm() {
      this.isVisibleForm = !this.isVisibleForm;
    },
    deleteRow() {
      if (confirm("Are you sure you want to delete this item?")) {
        for (var i = 0; i < this.selected.length; i++) {
          const index = this.times.indexOf(this.selected[i]);
          this.times.splice(index, 1);
        }
      }
    }
  }
};
</script>

<style lang="scss" >
</style>