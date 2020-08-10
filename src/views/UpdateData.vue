<template>
  <v-container class="toss-border">
    <v-row class="ml-2">
      <v-col cols="12" lg="6">
        <AccountPicker />
      </v-col>

      <v-col cols="12" lg="6" class="mt-6">
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
            <v-text-field
              v-model="date"
              label="Picker in menu"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)"
              >OK</v-btn
            >
          </v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AccountPicker from "../components/AccountPicker";

export default {
  name: "UpdateData",
  components: {
    AccountPicker,
  },
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
  }),
};
</script>

<style lang="scss" scoped></style>
