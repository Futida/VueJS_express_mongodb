<template>
  <transition appear name="change" mode="out-in">
    <b-container fluid>
      <div class="main__title">
        <div class="main__title__content">
          <div class="main__title__content-text">
            Vue.js Express MongoDB <br>
            Educational project
          </div>
          <div class="main__title__content-background">
            <img src="../static/img/logo.png" alt="">
          </div>
        </div>
      </div>
    </b-container>
  </transition>
</template>

<script>
  export default {}
</script>

<style lang="scss">

  @import '~styles/variables.scss';

  .main__title {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    &__content {
      font-weight: bold;
      font-size: 30px;
      text-align: center;
      line-height: 60px;
      &-text {
        color: $color-black-light;
        position: relative;
        z-index: 2;
      }
      &-background {
        position: relative;
        top: -180px;
        z-index: 1;
        & img {
          opacity: 0.7;
          width: 300px;
          height: 300px;
        }
      }
    }
  }
</style>
