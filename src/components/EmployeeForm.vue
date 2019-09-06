<template>
  <div id="employee-form">
    <form method="POST" @submit.prevent="handleSubmit">
      <label>Employee name</label>
      <input
        ref="first"
        :class="{ 'has-error': submitting && invalidName }"
        @focus="clearStatus"
        type="text"
        v-model="employee.name"
      />
      <label>Employee Email</label>
      <input
        type="text"
        :class="{ 'has-error': submitting && invalidEmail }"
        @keypress="clearStatus"
        v-model="employee.email"
      />
      <p v-if="error && submitting" class="error-message">❗ Please fill out all required fields</p>
      <p v-if="success" class="success-message">✅ Employee successfully added</p>
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

      // focus on the first input
      this.$refs.first.focus();

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