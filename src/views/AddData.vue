<template>
  <v-container>
    <v-form v-model="valid" @submit.prevent="submitData">
      <v-container>
        <v-row>
          <v-col cols="12" lg="6">
            <v-text-field v-model="name" :rules="nameRules" label="Tài khoản: " required></v-text-field>
          </v-col>

          <v-col cols="12" lg="6">
            <v-text-field
              v-model="phone"
              :rules="phoneRules"
              type="number"
              :counter="10"
              label="Số điện thoại:"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="6">
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          </v-col>
          <v-col cols="12" lg="6" class="mt-3">
            <v-file-input
              show-size
              counter
              dense
              accept="image/*"
              label="Ảnh"
              placeholder="Choose an image"
            ></v-file-input>
          </v-col>
        </v-row>
        <div class="text-center">
          <v-btn type="Submit" color="primary" center>Submit</v-btn>
        </div>
      </v-container>
    </v-form>
    <v-data-table
      :headers="headers"
      :items="users"
      :search="search"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    newUser: {},
    valid: false,
    name: "",
    nameRules: [v => !!v || "Name is required"],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    phone: "",
    phoneRules: [v => !!v || "Phone is required"],
    headers: [
      { text: "Tài khoản", value: "name" },
      { text: "Số điện thoại", value: "phone" },
      { text: "Email", value: "email" },
      { text: "#", value: "pic" }
    ],
    users: [
      {
        name: "User 1",
        phone: "0911781683",
        email: "a@gmail.com",
        pic: "abcccccccc"
      },
      {
        name: "User 2",
        phone: "0911891683",
        email: "b@gmail.co",
        pic: "picky"
      },
      {
        name: "User 3",
        phone: "0998381683",
        email: "c@gmail.org",
        pic: "peekaboo"
      }
    ]
  }),
  methods: {
    submitData() {
      this.newUser = { name: this.name, phone: this.phone, email: this.email };
      this.users.push(this.newUser);
    }
  }
};
</script>

<style lang="scss" scoped>
.text-center {
  text-align: center !important;
}
</style>