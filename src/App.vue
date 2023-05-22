<template>
  <div class="container" id="root">
    <router-view></router-view>
  </div>
</template>

<script>
import '/src/js/rem.js'

export default {
  name: 'App',
}
</script>

<style lang="less" scoped>
.container {
  background-color: aqua;
  width: 7.6rem;
}
</style>