<template>
  <header>
    <h2 @click="$router.push('/')" class="cr-p">EDCAN</h2>

    <img src="../assets/main/search_icon.svg" alt="검색 아이콘" class="cr-p">
  </header>
</template>
<script>
export default {
  name: 'NewComponent'
}
</script>
<style scoped>

header {
  width: 100%;
  max-width: 512px;
  height: 62px;

  padding: 16px 8px;

  display: flex;
  justify-content: space-between;

  background-color: #fcfcff;

  position: fixed;
  left: 50%;
  top : 0px;

  transform: translateX(-50%);
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
<!--<style scoped>-->

<!--.bottom-navigation .link img {-->
<!--  width: 30px;-->
<!--}-->

<!--.bottom-navigation .link div {-->
<!--  font-style: normal;-->
<!--  font-weight: 500;-->
<!--  font-size: 12px;-->
<!--  line-height: 15px;-->

<!--  text-align: center;-->

<!--  color: #858992;-->
<!--}-->

<!--</style>-->