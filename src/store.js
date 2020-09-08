import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loadingStatus: "notLoading",
    items: null,
  },

  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status;
    },
    SET_ITEMS(state, items) {
      state.items = items;
    },
  },

  actions: {
    fetchItems(context) {
      context.commit("SET_LOADING_STATUS", "loading");
      axios
        .get(
          "https://api.konimbo.co.il/v1/items?token=9c1a92bf8cefc59e4ec9fa7c53bba0f90dd8b15850bef1062dbf32c5e8fd3a08"
        )
        .then((response) => {
          context.commit("SET_LOADING_STATUS", "notLoading");
          context.commit("SET_ITEMS", response.data);
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    },
  },

  getters: {
    itemList: (state) => {
      return state.items;
    },
    getItem: (state) => (index) => {
      return state.items[index];
    },
  },
});
