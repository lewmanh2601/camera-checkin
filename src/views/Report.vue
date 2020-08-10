<template>
  <v-container>
    <div>
      <v-row justify="center">
        <v-col cols="7">
          <DatePicker />
        </v-col>
        <v-col>
          <v-switch label="Unknown" class="ml-2"></v-switch>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-btn color="primary">Lọc dữ liệu</v-btn>
      </v-row>
      <br />
    </div>
    <SearchTable />
  </v-container>
</template>

<script>
import DatePicker from "../components/DatePicker";
import SearchTable from "../components/SearchTable";

export default {
  name: "Report",
  components: {
    DatePicker,
    SearchTable,
  },
};
</script>

<style lang="scss" scoped></style>
