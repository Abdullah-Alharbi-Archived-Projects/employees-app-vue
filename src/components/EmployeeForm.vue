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
      this.submitting = true;
      this.clearStatus();

      if (this.invalidName || this.invalidEmail) {
        this.error = true;
        return false;
      }

      this.$emit("add:employee", this.employee);

      // clear the inputs
      this.employee = {
        name: "",
        email: ""
      };

      this.error = false;
      this.success = true;
      this.submitting = false;
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

[class*="-message"] {
  font-weight: 500;
}

.error-message {
  color: #d33c40;
}

.success-message {
  color: #32a95d;
}
</style>