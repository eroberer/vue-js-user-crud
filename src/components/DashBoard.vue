<template>
  <div class="container">
      <h2>Srping Boot & Vue.js Example User Crud Project
        <span class="text-right"><router-link class="btn btn-info" :to="{ name: 'UserDetail', params: { id: 0 }}">Add User</router-link></span>
      </h2>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Surname</th>
        <th scope="col">Birth Date</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in responseData" :key="entry.id">
        <td v-for="key in gridColumns">
          {{entry[key]}}
        </td>
        <td>
          <router-link class="btn btn-info" :to="{ name: 'UserDetail', params: { id: entry['id'] }}">Update</router-link>
          <button type="button" class="btn btn-danger" v-on:click="deleteUser(entry['id'])">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import axios from 'axios'
const serviceURL = `http://localhost:8080/api/users/`

export default {
  name: 'DashBoard',

  data () {
    return {
      gridColumns: ['id', 'name', 'surname', 'birthDate'],
      responseData: []
    }
  },

  created () {
    this.getUserList()
  },

  methods: {
    getUserList: function () {
      axios.get(serviceURL)
        .then(response => { this.responseData = response.data })
        .catch(e => { console.log(e) })
    },

    deleteUser: function (recordId) {
      axios.delete(serviceURL + recordId)
        .then(response => { this.getUserList() })
        .catch(e => { console.log(e) })
    }
  }

}
</script>

<style scoped>
.table {
  border:2px solid #eee;
}
</style>
