<template>
  <div class="row">
    <div class="col-xl-14 offset-4">
      <b-form>
        <b-form-group id="exampleInputGroup1"
                      label="Email address:"
                      label-for="exampleInput1">
          <b-form-input id="exampleInput1"
                        type="email" required
                        placeholder="Enter email"
                        v-model="userData.email"
                        @input="email"
          ></b-form-input>
          <div v-if="flagCorrectEmail">ok</div>
          <div v-else>no</div>
        </b-form-group>
        <b-form-group id="exampleInputGroup2"
                      label="Your Name:" label-for="exampleInput2">
          <b-form-input id="exampleInput2"
                        type="text" required
                        placeholder="Enter name"
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="secondary">Reset</b-button>
      </b-form>
    </div>
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
        flagCorrectEmail:''
      }
    },
    methods: {
      email(value) {
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(pattern.test(value));
        pattern.test(value) ? this.flagCorrectEmail = true : this.flagCorrectEmail = false
      }
    }
  }
</script>

<style>
  .inputGroupError {
    color: red !important;
  }


</style>
