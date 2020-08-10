<template>
  <v-containter>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :return-value.sync="date"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field v-model="dateRangeText" label="Date range" readonly v-bind="attrs" v-on="on"></v-text-field>
      </template>
      <v-date-picker v-model="dates" range>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
        <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
      </v-date-picker>
    </v-menu>
  </v-containter>
</template>

<script>
export default {
  name: "DatePicker",
  data() {
    return {
      dates: ["2019-09-10", "2019-09-20"],
      menu: false,
      menu2: false
    };
  },
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    }
  }
};
</script>