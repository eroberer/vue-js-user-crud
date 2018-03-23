<template>
  <div class="container">
    <div class="col-md-8  mx-auto">
      <h2>Save & Update user</h2>
        <div class="form-group text-left">
          <label>Name</label>
          <input type="text" class="form-control" v-model="user.name">
        </div>

        <div class="form-group text-left">
          <label>Surname</label>
          <input type="text" class="form-control" v-model="user.surname">
        </div>

        <div class="form-group text-left">
          <label>Birth Date</label>
          <input type="date" class="form-control" v-model="user.birthDate">
        </div>

        <button  v-on:click="save" class="btn btn-primary">Save</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
const serviceURL = `http://localhost:8080/api/users/`

export default {
  name: 'UserDetail',

  created () {
    this.id = this.$route.params.id
    if (this.id !== 0)
      axios.get(serviceURL + this.id)
        .then(response => {
          if (response.data) {
            this.user = response.data
            this.isThereUser = true;
          }
        })
        .catch(e => { console.log(e) })
  },

  data () {
    return {
      id: 0,
      isThere: false,
      user: { name: '', surname: '', birthDate: '' }
    }
  },

  methods: {
    save: function () {

      if (this.isThereUser) {
        axios.put(serviceURL + this.id, this.user)
          .then(response => { router.push('/') })
          .catch(e => { console.log(e) })
      } else {
        axios.post(serviceURL, this.user)
          .then(response => { router.push('/')})
          .catch(e => { console.log(e) })
      }
      
    }
  }

}
</script>
