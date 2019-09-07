<template>
  <div id="app" class="small-container">
    <toggle-api :callAPI="callAPI" @call:api="toggleApiCalls" />

    <h1>Employees</h1>

    <employee-form @add:employee="addEmployee" />

    <search-input @search:employee="searchEmployee" />
    <employee-table
      :employees="renderFilter ? filterEmployees : employees"
      @edit:employee="editEmployee"
      @delete:employee="deleteEmployee"
    />
  </div>
</template>

<script>
import EmployeeTable from "@/components/EmployeeTable";
import EmployeeForm from "@/components/EmployeeForm";
import SearchInput from "@/components/SearchInput";
import ToggleApi from "@/components/ToggleApi";
import ApiService from "./services/ApiService";

export default {
  name: "app",
  components: {
    EmployeeTable,
    EmployeeForm,
    SearchInput,
    ToggleApi
  },
  data() {
    return {
      employees: [],
      callAPI: true,
      filterEmployees: [],
      renderFilter: false
    };
  },
  methods: {
    async addEmployee(employee) {
      // generate new id
      const id = this.generateId();
      const newEmployee = { ...employee, id };

      const oldEmployees = [...this.employees];

      // update the state
      this.employees = [...this.employees, newEmployee];
      if (!this.callAPI) return true;

      try {
        delete newEmployee.id;
        const response = await ApiService.store(newEmployee);
        const { data } = response;
        newEmployee.id = data.id;
      } catch (O_O) {
        console.log(O_O);
        alert(O_O.message ? O_O.message : "something went wrong.");
        this.employees = [...oldEmployees];
      }
    },
    editEmployee(id, updatedEmployee) {
      this.employees = this.employees.map(employee =>
        employee.id === id ? updatedEmployee : employee
      );
    },
    deleteEmployee(id) {
      this.employees = this.employees.filter(employee => employee.id !== id);
    },
    searchEmployee({ searchType, search }) {
      if (search.length === 0 || search === "")
        return (this.renderFilter = false);
      const type = searchType ? searchType : "name";
      this.filterEmployees = [...this.employees];
      this.filterEmployees = this.filterEmployees.filter(employee => {
        return employee[type].includes(search);
      });
      this.renderFilter = true;
    },
    toggleApiCalls() {
      this.callAPI = !this.callAPI;
    },
    generateId() {
      const lastId =
        this.employees.length > 0
          ? this.employees[this.employees.length - 1].id
          : 0;
      const id = lastId + 1;
      return id;
    }
  },
  async created() {
    if (!this.callAPI) {
      this.employees = [
        {
          id: 1,
          name: "Richard Hendricks",
          email: "richard@piedpiper.com"
        },
        {
          id: 2,
          name: "Bertram Gilfoyle",
          email: "gilfoyle@piedpiper.com"
        },
        {
          id: 3,
          name: "Dinesh Chugtai",
          email: "dinesh@piedpiper.com"
        }
      ];
    } else {
      try {
        const response = await ApiService.get();
        const { data } = response;
        this.employees = [...data];
      } catch (O_O) {
        console.log(O_O);
      }
    }
  }
};
</script>

<style>
html,
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
