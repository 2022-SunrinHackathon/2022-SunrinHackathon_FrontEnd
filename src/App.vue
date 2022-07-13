<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import "/src/assets/style/global.css";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page {
  width : 100%;
  max-width: 412px;
  height: 100vh;

  padding: 0 30px;
  margin: 0 auto;
}
</style>
