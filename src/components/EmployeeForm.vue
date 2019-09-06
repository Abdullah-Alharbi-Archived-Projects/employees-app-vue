<template>
  <div id="employee-form">
    <form method="POST">
      <label>Employee name</label>
      <input type="text" />
      <label>Employee Email</label>
      <input type="text" />
      <button class="accent-button">Add Employee</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "employee-form",
  data() {
    return {
      name: "",
      email: ""
    };
  }
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}
</style>