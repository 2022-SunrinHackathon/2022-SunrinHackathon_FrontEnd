<template>
  <div class="page login-page bottom-navi-page">
    <div class="panel">
      <img :src="logo" class="logo">

    </div>

<!--    <BottomNavi/>-->


  </div>
</template>

<script>
// import BottomNavi from "@/components/BottomNavi";

export default {
  name: "loginPage.vue",
  data() {
    return {
      inputEmail: "",
      inputPassword: "",
      logo: require("/src/assets/main/위그비.svg")
    }
  },
  components: {
    // BottomNavi
  },
}
</script>

<style scoped>

@import "/src/assets/style/mainPage.css";

</style>
