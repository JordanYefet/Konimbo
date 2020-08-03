<template>
  <div>
    <h1>You are in the item detail page!</h1>
    <!-- <h1>{{item.title}}</h1> -->
    <router-link :to="{name: 'Home'}">Go Back!</router-link>
  </div>
</template>

<script>
export default {
  name: "itemDetail",
  props: ["item"],
};
</script>

<style></style>
