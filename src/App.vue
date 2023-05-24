<template>
  <div class="container">
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
  background-color: rgba(0, 255, 255, 0.055);
  width: 7.6rem;
}

:deep(.el-card__body) {
  padding: 0;
}

:deep(.el-drawer__body) {
  padding: 0;
}

:deep(.el-drawer__title) {
  font-size: .5rem;
}

:deep(.el-menu-item-group__title) {
  font-size: .23rem;
}
</style>
