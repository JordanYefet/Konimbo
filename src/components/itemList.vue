<template>
  <div class="containerGrid">
    <div class="containerItems">
      <div v-for="(item, index) in items" v-bind:key="index">
        <Item v-bind:item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  name: "itemList",
  props: ["items"],
  components: {
    Item,
  },
};
</script>

<style scoped>
.containerGrid {
}
.containerItems {
  display: grid;
  /*   grid-template-columns: repeat(4, 1fr); */
  border: 3px solid teal;
  justify-items: center;

  /* Responsive Area */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 2rem;
  padding-left: 30px;
  padding-right: 30px;
}

@media only screen and (min-width: 2500px) {
  .containerItems {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>