<template>
  <div>
    <router-link :to="{ name: 'Home' }">Go Back!</router-link>
    <h1 id="title">{{ getItem.title }}</h1>

    <div class="photoGrid" v-if="getItem.images[0]">
      <div v-for="(image, index) in getItem.images" :key="index">
        <img id="image" :src="image.url" />
      </div>
    </div>
    <div class="prices">
      <h1>{{ getItem.price }}₪</h1>
      <p id="oldPrice" v-if="getItem.origin_price">
        {{ getItem.origin_price }}₪
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "itemDetail",
  props: ["item"],

  computed: {
    getItem() {
      return this.$store.getters.getItem(this.$route.params.index);
    },
  },
};
</script>

<style scoped>
#title {
  text-align: right;
}
.photoGrid {
  display: grid;
  /*   border: 3px solid teal; */
  justify-items: center;

  /* Responsive Area */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 1rem;
  padding-left: 30px;
  padding-right: 30px;
}

@media only screen and (min-width: 2200px) {
  .photoGrid {
    grid-template-columns: repeat(4, 1fr);
  }
}

#image {
  width: 100%;
  height: 200px;
  max-height: 200px;
  object-fit: contain;
  margin: 0;
}

.prices {
  display: inline;
  text-align: right;
}
.prices #oldPrice {
  text-decoration: line-through;
}
</style>
