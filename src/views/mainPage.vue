<template>
  <div class="page login-page">

    <header>
      <h2>EDCAN</h2>

      <img src="./../assets/main/search_icon.svg" alt="">
    </header>

  </div>
</template>

<script>
export default {
  name: "loginPage.vue",
  data() {
    return {
      inputEmail: "",
      inputPassword: ""
    }
  }
}
</script>

<style scoped>

header {
  padding : 16px 8px;

  display: flex;
  justify-content: space-between;
}

header h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #6F8BEC;

  display: inline;
}

</style>