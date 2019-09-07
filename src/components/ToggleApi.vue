<template>
  <div id="toggle-api" class="float-right">
    <button
      :class="!callAPI ? 'red' : 'accent-button'"
      @click.prevent="handleToggle"
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
.red {
  background-color: #ee0317;
  border-color: #cc0314;
}
</style>