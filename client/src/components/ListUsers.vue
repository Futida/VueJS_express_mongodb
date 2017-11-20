<template>
  <v-container fluid>
    <v-layout flex>
      <v-flex xs12 sm8 offset-sm2>
        <v-data-table :headers="headers"
                      hide-actions
                      class="elevation-1">
          <td>sfdsdfsdf</td>
          <td>sffdssd</td>
          <td>sfdsfsdfsdf</td>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        headers: [
          { text: 'Name', value: 'name', align: "center" },
          { text: 'Last name', value: 'lastname', align: "center" },
          { text: 'Email', value: 'email', align: "center" },
        ],
      }
    }
  }
</script>
