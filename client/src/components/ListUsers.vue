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
      <tr v-for="user in listUsers.slice(sliceCountUsers.start,sliceCountUsers.end)">
        <td>{{user.name}}</td>
        <td>{{user.lastName}}</td>
        <td>{{user.email}}</td>
        <td class="d-flex justify-content-around">
          <b-button variant="primary" @click="showEditModal(user)">Edit</b-button>
          <b-button variant="danger" size="sm" @click="deleteUser(user._id)">Delete</b-button>
        </td>
      </tr>
      </tbody>
    </table>
    <Pagination :current="paginator.currentPage"
                :total="this.listUsers.length"
                :perPage="paginator.perPage"
                @change="computedCountUsers">
    </Pagination>

    <b-modal id="modaledit" title="Edit user" ref="editModal" hide-footer>
      <b-form-group id="exampleInputGroup1"
                    label="Edit Email address:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="email"
                      required
                      placeholder="Edit email"
                      v-model="editUser.email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Edit Name:" label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      required
                      placeholder="Edit name"
                      v-model="editUser.name"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Edit Last name:" label-for="exampleInput3">
        <b-form-input id="exampleInput3"
                      type="text"
                      required
                      placeholder="Edit Last name"
                      v-model="editUser.lastName"
        ></b-form-input>
      </b-form-group>
      <b-button class="mt-3" variant="outline-primary" block @click="updateUser(editUser._id)">Edit</b-button>
    </b-modal>
  </b-container>
</template>

<script>

  import Pagination from './pagination/Pagination.vue'

  export default {
    data() {
      return {
        listUsers: [],
        editUser: [],
        paginator: {
          currentPage: 1,
          perPage: 5,
        },
        sliceCountUsers: {
          start: 0,
          end: 5
        }
      }
    },

    components: { Pagination },
    created() {
      this.getUsers();
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
      },
      showEditModal(item) {
        this.$refs.editModal.show();
        this.editUser = { ...item };
      },
      updateUser(id) {
        let uri = 'http://localhost:4000/users/update/' + id;
        this.axios.post(uri, this.editUser).then(() => {
          this.getUsers()
        });
        this.$refs.editModal.hide();
      },
      computedCountUsers(page) {
        this.paginator.currentPage = page;
        this.sliceCountUsers.end = (page * this.paginator.perPage);
        this.sliceCountUsers.start = this.sliceCountUsers.end - this.paginator.perPage;
      }
    }
  }
</script>


