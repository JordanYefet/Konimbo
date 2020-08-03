<template>
  <div class="containerGrid">
    <div class="containerItems">
      <div v-for="(item, index) in items" v-bind:key="index">
        <!--         <router-link tag="div" id="link" :to="{ name: 'itemDetail', params: { index: index}  }"> -->
        <router-link
          tag="div"
          id="link"
          :to="{ name: 'itemDetail', params: { index: index } }"
        >
          <Item :item="item" :index="index" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
/* import itemDetail from "./itemDetail.vue"; */

export default {
  name: "itemList",
  props: ["items", "searchedItem"],
  components: {
    Item,
    /*     itemDetail, */
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
