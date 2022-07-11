<template>
  <button @click="$store.commit('countAdd')">클릭</button>
  <h1>{{ $store.state.count }}</h1>
</template>

<script>
export default {
  name: "mainPage",
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>