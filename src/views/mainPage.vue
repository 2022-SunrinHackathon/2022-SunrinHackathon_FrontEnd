<template>
  <button @click="a">클릭</button>

<!--  {{ $store.state.postList }}-->
  <div v-for="i, n in $store.state.postList" :key="n">{{ i }}</div>
</template>

<script>
import { getPost } from "/src/api"

export default {
  name: "mainPage",
  data() {
    return {}
  },
  methods: {
    a(){
      getPost()
    }
  }
}
</script>

<style scoped>

</style>