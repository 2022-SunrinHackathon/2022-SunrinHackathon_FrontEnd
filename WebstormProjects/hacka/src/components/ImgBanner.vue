<template>
  <div class="banner-parent">
    <li class="banner-child" v-for="(a, i) in imgResource" :key="a">
      <img :src="imgResource[i]" />
    </li>
  </div>
</template>
<script>
export default {
  name: 'ImgBanner',
  data() {
    return {
      imgResource: [
          require("/src/assets/main/example.png"),
          require("/src/assets/main/example.png"),
          require("/src/assets/main/example.png"),
          require("/src/assets/main/example.png"),
      ]
    }
  }
}
</script>
<style scoped>

.banner-parent {
  overflow: auto;
  overflow-x:scroll;
  height: 220px;
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  white-space:nowrap;
  width: 100%;
  position: absolute;
  left: 0;
}

::-webkit-scrollbar {
  display: none;
}

img {
  margin-right: 12px;
  width: 350px;
}

li {
  list-style: none;
}

</style>