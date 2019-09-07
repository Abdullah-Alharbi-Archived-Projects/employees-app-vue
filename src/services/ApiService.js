import axios from "axios";

const API_URI = "https://jsonplaceholder.typicode.com/users";

export default {
  async get() {
    return await axios.get(API_URI);
  },
  async single(id) {
    return await axios.get(API_URI + `/${id}`);
  },
  async store(data) {
    return await axios.post(API_URI, data);
  },
  async update(id, updatedData) {
    return await axios.put(API_URI + `/${id}`, updatedData);
  },
  async delete(id) {
    return await axios.delete(API_URI + `/${id}`);
  }
};
