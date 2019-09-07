<template>
  <div id="toggle-api">
    <button
      @click.prevent="handleToggle"
      :class="{ 'disabled': callAPI }"
    >Call API [{{ callAPI ? "active" : "not active" }}]</button>
  </div>
</template>

<script>
export default {
  name: "toggle-api",
  props: ["callAPI"],
  methods: {
    handleToggle() {
      this.$emit("call:api");
    }
  }
};
</script>

<style scoped>
.disabled {
  background-color: #cdcdcd;
}
</style>