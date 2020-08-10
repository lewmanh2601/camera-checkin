<template>
  <v-container class="toss-border">
    <v-row>
      <v-col cols="7">
        <AccountPicker />
      </v-col>
      <v-col>
        <v-switch label="Unknown" class="ml-2"></v-switch>
      </v-col>
    </v-row>
    <div class="mt-5">
      <v-data-table
        :headers="headers"
        :items="people"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </div>
  </v-container>
</template>

<script>
import AccountPicker from "../components/AccountPicker";

export default {
  name: "Home",
  components: {
    AccountPicker,
  },
  data() {
    return {
      headers: [
        {
          text: "NAME",
          align: "left",
          sortable: false,
          value: "name",
        },
        { text: "ẢNH FACE CROPPED", value: "croppedPic" },
        { text: "ẢNH GỐC", value: "orgPic" },
        { text: "ĐIỂM SAI LỆCH", value: "deviation" },
        { text: "THỜI GIAN", value: "time" },
        { text: "TIMESTAMP", value: "timeStamp" },
        { text: "CAMERA", value: "camera" },
        { text: "RA/VÀO", value: "inAndOut" },
        { text: "SỐ LẦN VÀO/RA", value: "numOfEntries" },
      ],

      people: [
        {
          name: "User 1",
          croppedPic: "pic",
          orgPic: "org pic",
          deviation: "1.4573",
          time: "2020-06-07",
          timeStamp: "x",
          camera: "y",
          inAndOut: "in",
          numOfEntries: "7",
        },
        {
          name: "User 2",
          croppedPic: "pic",
          orgPic: "org pic",
          deviation: "1.4573",
          time: "2020-06-07",
          timeStamp: "x",
          camera: "y",
          inAndOut: "in",
          numOfEntries: "7",
        },
        {
          name: "User 3",
          croppedPic: "pic",
          orgPic: "org pic",
          deviation: "1.4573",
          time: "2020-06-07",
          timeStamp: "x",
          camera: "y",
          inAndOut: "in",
          numOfEntries: "7",
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
