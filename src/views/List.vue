<template>
  <v-container class="toss-border">
    <div style="border-bottom: 1px solid gray">
      <v-row class=" ml-3">
        <v-col cols="5">
          <AccountPicker />
        </v-col>

        <v-col cols="5" class="mt-6">
          <DatePicker />
        </v-col>

        <v-col>
          <v-switch label="Unknown" class="ml-2"></v-switch>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn color="primary">Lọc dữ liệu</v-btn>
      </v-row>
      <br />
    </div>
    <br />

    <div>
      <v-row class="mt-2 ml-3" justify="end">
        <v-col cols="6">
          <v-text-field
            v-model="search"
            width="50%"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="people"
        :items-per-page="5"
        :search="search"
        class="elevation-1"
      ></v-data-table>
    </div>
  </v-container>
</template>

<script>
import DatePicker from "../components/DatePicker";
import AccountPicker from "../components/AccountPicker";

export default {
  name: "List",
  components: {
    DatePicker,
    AccountPicker,
  },
  data() {
    return {
      search: "",
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

<style lang="scss" scoped></style>
