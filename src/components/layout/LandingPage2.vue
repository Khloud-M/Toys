<template>
  <section class="landing">
    <div class="container d-flex">
      <h3>{{ getPath }}</h3>
      <ul>
        <li><router-link to="/">home</router-link></li>
        <li><v-icon icon="mdi-arrow-right-thin"></v-icon></li>
        <li>{{ getPath }}</li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    getPath() {
      return this.$route.path.replace("/", "");
    },
  },
};
</script>
  <!-- <style lang="scss" scoped>
.landing {
  position: relative;
  z-index: 1;
  top: -10px;
  background-color: rgb(237 26 44 / 70%);
  height: 11vh;
  color: var(--second-color);
  margin-bottom: var(--margin);
}
.container {
  justify-content: space-between;
  height: 100%;
  padding-top: 30px;
  text-transform: capitalize;

  h3 {
    font-weight: 400;
  }
  ul {
    li {
      list-style: none;
    }
    display: flex;
    flex-direction: row;
    width: 200px;
    justify-content: space-between;
    align-items: center;
    & > :nth-child(1) {
      a {
        color: rgb(237 26 44 / 70%);
        background-color: #fff;
        text-transform: capitalize;
        padding: 10px 10px;
        border-radius: 7px;
      }
    }
    & > :nth-child(3) {
      background-color: rgba(255, 255, 255, 0.15);
      padding: 10px 10px;
      border-radius: 7px;
    }
  }
}
</style>
 -->
