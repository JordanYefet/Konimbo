<template>
  <div class="Header">
    <h1>Header</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.Header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: teal;
  color: white;
  text-align: center;
  height: 200px;
}

h1 {
  margin: 0;
  position: static;
}
</style>
