<template>
  <b-container>
    <table class="table table-bordered table-responsive-md table-hover mt-5">
      <thead class="thead-inverse">
      <th>Name</th>
      <th>Last name</th>
      <th style="width:200px">E-mail</th>
      <th style="width:200px">Actions</th>
      </thead>
      <tbody>
      <tr v-for="user in listUsers">
        <td>{{user.name}}</td>
        <td>{{user.lastName}}</td>
        <td>{{user.email}}</td>
        <td class="d-flex justify-content-around">
          <b-button variant="primary">Edit</b-button>
          <b-button variant="danger" size="sm" @click="deleteUser(user._id)">Delete</b-button>
        </td>
      </tr>
      </tbody>
    </table>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        listUsers: []
      }
    },
    created() {
      this.getUsers()
    },
    methods: {
      getUsers() {
        let uri = 'http://localhost:4000/users';
        this.axios.get(uri).then((response) => {
          this.listUsers = response.data
        })
      },
      deleteUser(id) {
        let uri = 'http://localhost:4000/users/delete/' + id;
        this.axios.get(uri).then(() => {
          this.getUsers()
        });
      }
    }
  }
</script>


