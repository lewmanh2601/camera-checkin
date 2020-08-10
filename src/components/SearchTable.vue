<template>
  <v-container>
    <v-text-field
      v-model="search"
      width="50%"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    ></v-text-field>

    <v-simple-table fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left" v-for="(header, key) in headers" :key="key">
              {{ header.text }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in links" :key="key">
            <td>{{ item.link }}</td>
            <td>{{ item.description }}</td>
            <td>
              <v-btn icon color="red" @click="deleteRow(key)">x</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "SearchTable",
  data() {
    return {
      headers: [
        {
          text: "Link",
          value: "link",
        },
        {
          text: "Description",
          value: "description",
        },
        {
          text: "Action",
          value: "controls",
        },
      ],
      links: [
        {
          link: "https://www.facebook.com/",
          description: "Facebook link",
        },
        {
          link: "https://www.youtube.com/watch?v=DwTPbtWkRHQ",
          description: "Youtube link",
        },
        {
          link: "https://vuetifyjs.com/en/themes/premium/",
          description: "Vuetify link",
        },
      ],

      search: "",
    };
  },
  methods: {
    deleteRow(index) {
      this.links.splice(index, 1);
    },
    deleteColumn(index) {
      let value = this.headers[index].value;
      this.links.map((item) => {
        delete item[value];
      });
      this.headers.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped></style>
