<template>
  <div id="employee-form">
    <form method="POST">
      <label>Employee name</label>
      <input v-model="name" type="text" />
      <label>Employee Email</label>
      <input v-model="email" type="text" />
      <button class="accent-button">Add Employee</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "employee-form",
  data() {
    return {
      employee: {
        name: "",
        email: ""
      }
    };
  }
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}
</style>