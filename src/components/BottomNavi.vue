<template>
  <ul class="bottom-navigation">

    <router-link to="/" class="link">
      <img src="../assets/bottom_navigation/home_icon.svg" alt="메인페이지 아이콘">
      <div>홈</div>
    </router-link>

    <router-link to="/main" class="link">
      <img src="../assets/bottom_navigation/bug_icon.svg" alt="테스트페이지 아이콘">
      <div>테스트</div>
    </router-link>

    <router-link to="/main" class="link">
      <img src="../assets/bottom_navigation/bug_icon.svg" alt="테스트페이지 아이콘">
      <div>테스트</div>
    </router-link>

    <router-link to="/profile" class="link">
      <img src="../assets/bottom_navigation/profile_icon.svg" alt="프로필페이지 아이콘">
      <div>프로필</div>
    </router-link>

  </ul>
</template>
<script>
export default {
  name: 'BottomNavi'
}
</script>
<style scoped>

header {
  padding: 16px 8px;

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
.bottom-navigation {
  background-color: #F7F8FA;

  list-style: none;

  padding: 15px;

  display: flex;
  justify-content: space-around;
}

.bottom-navigation .link {
  text-align: center;

  cursor: pointer;
}

.bottom-navigation .link img {
  width: 30px;
}

.bottom-navigation .link div {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  text-align: center;
}

.bottom-navigation .link:not(.router-link-active) div {
  color: #858992;
}

.bottom-navigation .router-link-active {
  color: #0044cb;
}

</style>