<template>
  <transition name="change">
    <b-container fluid>
      <b-row>
        <b-col cols="6" offset="3">
          <b-form class="mt-5">
            <b-form-group id="exampleInputGroup1"
                          label="Email address:"
                          label-for="exampleInput1">
              <b-form-input id="exampleInput1"
                            type="email"
                            required
                            placeholder="Enter email"
                            v-model="userData.email"
                            @input="email"
              ></b-form-input>
              <div class="correct pl-2" v-if="flagCorrectEmail">Correct</div>
              <div class="red pl-2" v-else>Incorrect</div>
            </b-form-group>
            <b-form-group id="exampleInputGroup2"
                          label="Your Name:" label-for="exampleInput2">
              <b-form-input id="exampleInput2"
                            type="text"
                            required
                            placeholder="Enter name"
                            v-model="userData.name"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup3"
                          label="Your Last name:" label-for="exampleInput3">
              <b-form-input id="exampleInput3"
                            type="text"
                            required
                            placeholder="Enter Last name"
                            v-model="userData.lastName"
              ></b-form-input>
            </b-form-group>
            <div class="col-sm-12 d-flex justify-content-between p-0">
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="secondary">Reset</b-button>
            </div>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </transition>
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
        flagCorrectEmail: ''
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

<style lang="scss">
  @import '~styles/variables.scss';

  .red {
    color: $color-red;
  }

  .correct {
    color: green;
    font-size: 14px;
  }

</style>
