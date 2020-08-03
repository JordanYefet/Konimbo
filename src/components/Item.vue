<template>
  <div class="containerBorder">
    <div class="containerItem">
      <div class="photoDiv">
        <img id="image" v-if="item.images[0]" :src="item.images[0].url" />
        <span id="noPhoto" v-else>
          <h1>Image is not avaliable</h1>
        </span>
      </div>
      <p class="title">{{ item.title }}</p>
      <div class="newPrice">
        <h1>{{ item.price }}₪</h1>
      </div>
      <div class="oldPrice" v-if="item.origin_price">
        <p>{{ item.origin_price }}₪</p>
      </div>
      <h1 id="popup">לחץ כאן לפרטים נוספים</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["item", "index"],
};
</script>

<style scoped>
.containerBorder {
  position: relative;
  border: 1px dashed gray;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15);
  height: 350px;
  width: 200px;
  margin: 20px;
  cursor: pointer;
}
.containerItem {
  text-align: center;
  overflow: hidden;
  height: 350px;
}

.containerItem:hover :not(#popup) {
  animation: blur 0.2s linear 1 normal forwards;
}

.containerBorder:hover #popup {
  visibility: visible;
}

#popup {
  position: absolute;
  top: 30%;
  text-align: center;
  width: 100%;
  /*   height: 100%; */
  z-index: 1;
  visibility: hidden;
  margin: 0;
}

/* h1 {
  margin: 0;
}
 */
@keyframes blur {
  from {
    filter: blur(0px) opacity(1);
  }
  to {
    filter: blur(12px) opacity(0.8);
  }
}

.photoDiv {
  display: flex;
  align-items: center;
  width: 150px;
  height: 150px;
  margin: auto;
  margin-top: 10px;
}

#image {
  width: 100%;
  height: 150px;
  max-height: 150px;
  object-fit: contain;
  margin: 0;
}
.title {
  height: 60px;
  margin-top: 30px;
}

.newPrice {
  display: inline-block;
}

.oldPrice {
  text-decoration: line-through;
}
</style>
