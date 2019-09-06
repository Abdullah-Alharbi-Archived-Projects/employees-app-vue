<template>
  <div id="employee-form">
    <form method="POST" @submit.prevent="handleSubmit">
      <label>Employee name</label>
      <input v-model="employee.name" type="text" />
      <label>Employee Email</label>
      <input v-model="employee.email" type="text" />
      <button class="accent-button">Add Employee</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "employee-form",
  data() {
    return {
      submitting: false,
      error: false,
      success: false,
      employee: {
        name: "",
        email: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("add:employee", this.employee);

      // clear the inputs
      this.employee.name = "";
      this.employee.email = "";
    },
    clearStatus() {
      this.success = false;
      this.error = false;
    }
  },
  computed: {
    invalidName() {
      return this.employee.name === "" || this.employee.name.length === 0;
    },
    invalidEmail() {
      return this.employee.email === "" || this.employee.email.length === 0;
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}

button {
  margin-top: 15px;
}
</style>