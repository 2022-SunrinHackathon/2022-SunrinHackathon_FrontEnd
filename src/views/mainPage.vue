<template>
  <div class="page login-page header-page bottom-navi-page">
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

<style scoped>

.bottom-navigation .link img {
  width: 30px;
}

.bottom-navigation .link div {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  text-align: center;

  color: #858992;
}

</style>