<template>
  <div>
    <Searchbar @searchedItem="searchedItem = $event"></Searchbar>
    <itemList :items="filteredData" class="itemList"></itemList>
  </div>
</template>

<script>
import itemList from "./itemList.vue";
import Searchbar from "./Searchbar.vue";

export default {
  name: "Home",

  created() {
    this.$store.dispatch("fetchItems");
  },

  components: {
    itemList,
    Searchbar,
  },

  computed: {
    filteredData() {
      if (this.$store.getters.itemList) {
        return this.$store.getters.itemList.filter((searchItemFunction) => {
          return searchItemFunction.title
            .toLowerCase()
            .includes(this.searchedItem.toLowerCase());
        });
      } else {
        return 0;
      }
    },
  },

  data() {
    return {
      searchedItem: "",
    };
  },
};
</script>

<style></style>
