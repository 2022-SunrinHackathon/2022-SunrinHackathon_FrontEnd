<template>
  <div class="page profile-page bottom-navi-page">
    <Header/>

    <div class="panel">

    </div>

    <BottomNavi/>


  </div>
</template>

<script>
import BottomNavi from "@/components/BottomNavi";
import Header from "@/components/Header";

export default {
  name: "loginPage.vue",
  data() {
    return {
      inputEmail: "",
      inputPassword: ""
    }
  },
  components: {
    Header,
    BottomNavi

  }
}
</script>

<style scoped>



</style>
