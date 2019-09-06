<template>
  <div id="employee-form">
    <form method="POST">
      <label>Employee name</label>
      <input type="text" />
      <label>Employee Email</label>
      <input type="text" />
      <button>Add Employee</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "employee-form"
};
</script>

<style scoped>
</style>