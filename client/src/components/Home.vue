<template>
    <b-container fluid>
      <div class="main__title">
        <div class="main__title__content">
          <div class="main__title__content-text">
            Vue.js Express MongoDB <br>
            Educational project
          </div>
          <div class="main__title__content-background">
            <img src="../static/img/logo.png">
          </div>
        </div>
      </div>
    </b-container>
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
    &__content {
      width: 400px;
      height: 300px;
      overflow: hidden;
      text-align: center;
      &-text {
        color: $color-black-light;
        line-height: 60px;
        position: relative;
        font-weight: bold;
        font-size: 30px;
        margin-top: 80px;
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
