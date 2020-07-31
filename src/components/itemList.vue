<template>
  <div class="containerGrid">
    <!--     <p>{{ searchedItem }}</p> -->
    <div class="containerItems">
      <div v-for="(item, index) in items" v-bind:key="index">
        <Item v-bind:item="item" />
      </div>
      <!--       <div v-for="(item, index) in filteredData" v-bind:key="index">
        <Item v-bind:item="item" />
      </div> -->
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  name: "itemList",
  props: ["items", "searchedItem"],
  components: {
    Item,
  },
  computed: {},
};
</script>

<style scoped>
.containerItems {
  display: grid;
  border: 3px solid teal;
  justify-items: center;

  /* Responsive Area */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 1rem;
  padding-left: 30px;
  padding-right: 30px;
}

@media only screen and (min-width: 2200px) {
  .containerItems {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
