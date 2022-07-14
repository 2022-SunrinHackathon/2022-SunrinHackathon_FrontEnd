<template>
  <div class="page login-page bottom-navi-page">
    <div class="panel">
      <header>
        <h2>EDCAN</h2>

        <img src="../assets/main/search_icon.svg" alt="">
      </header>

      <ImgBanner/>

      <div class="gray-box">
        <h2 class="box-title">제목</h2>
        <div class="wrap">
          <h3 class="box-desc">이름이름이름이름</h3>
          <button class="btn">버튼</button>
        </div>
        <h5 class="box-desc2">
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        </h5>
      </div>

    </div>

    <BottomNavi/>


  </div>
</template>

<script>
import BottomNavi from "@/components/BottomNavi";
import ImgBanner from "@/components/ImgBanner";

export default {
  name: "loginPage.vue",
  data() {
    return {
      inputEmail: "",
      inputPassword: ""
    }
  },
  components: {
    BottomNavi,
    ImgBanner
  }
}
</script>

<style scoped>

header {
  padding : 16px 8px;

  display: flex;
  justify-content: space-between;
}

.gray-box {
  margin-top: 260px;
  background-color: #F4F5F7;
  width: 100%;
  height: 187px;
  border-radius: 24px;
  padding: 24px;
}

.box-title {
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
}

.wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.box-desc {
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  margin-top: 16px;
}

.box-desc2 {
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  color: #5B5B5B;
  margin-top: 16px;
}

.btn {
  width: 60px;
  height: 40px;
  background: #EFF0F2;
  border-radius: 12px;
  color: #606060;
  font-weight: 500;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 2px;
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