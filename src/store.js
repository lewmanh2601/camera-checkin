import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: ["User 1", "User 2", "User 3", "User 4"],
    homePeople: [
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
  },
  mutations: {},
  actions: {},
});
