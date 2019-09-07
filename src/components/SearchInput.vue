<template>
  <div id="search-employee">
    <form method="GET">
      <label for="search">Search</label>
      <input type="text" id="search" @keypress="handleSearch" v-model="search" />
      <select v-model="searchType" @change="handleSearch">
        <option value>Search by...</option>
        <option value="name">Name</option>
        <option value="email">Email</option>
      </select>
    </form>
  </div>
</template>

<script>
export default {
  name: "search-input",
  data() {
    return {
      searchType: "",
      search: ""
    };
  },
  methods: {
    handleSearch() {
      const { searchType, search } = this;
      this.$emit("search:employee", { searchType, search });
    }
  }
};
</script>

<style scoped>
</style>