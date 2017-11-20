<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-title primary-title>
              Enter user data
            </v-card-title>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Name</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  name="input1"
                  label="Enter name"
                  id="name"
                  v-model="userData.name"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Last name</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  name="input2"
                  label="Enter lastname"
                  id="lastname"
                  v-model="userData.lastName"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>E-mail</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  name="input3"
                  label="Enter email"
                  id="email"
                  v-model="userData.email"
                  :rules="[rules.required, rules.email]"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userData: {
          name: '',
          lastName: '',
          email: ''
        },
        rules: {
          required: (value) => !!value || 'Required.',
          email: (value) => {
            const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(value) || 'Invalid e-mail.'
          }
        }
      }
    }
  }
</script>
