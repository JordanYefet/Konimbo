<template>
  <div class="input-container">
    <input type="text" placeholder="Search" @input="searchItem" />
  </div>
</template>

<script>
export default {
  name: "Searchbar",
  methods: {
    searchItem(event) {
      this.$emit("searchedItem", event.target.value);
    },
  },
};
</script>

<style scoped>
.input-container {
  display: flex;
  background: #677482;
  padding: 10px;
  justify-content: center;
  background-color: teal;
  margin-top: 10px;
}
.input-container input {
  border: none;
  color: #2c3e50;
  padding: 6px 15px;
  font-size: 18px;
  border-radius: 5px;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #a6b0ba;
  opacity: 1; /* Firefox */
}
</style>
