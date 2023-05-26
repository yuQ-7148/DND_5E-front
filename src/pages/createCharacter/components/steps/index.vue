<template>
    <div class="container">
        <el-steps :active="activeStep" finish-status="success" align-center>
            <el-step title="选择种族" />
            <el-step title="选择职业" />
            <el-step title="决定属性值" />
            <el-step title="基本信息" />
            <el-step title="选择装备" />
        </el-steps>
    </div>
</template>

<script>
export default {
    name: 'Steps',
    props: ['activeStep']
}
</script>

<style lang="less" scoped>
.el-steps {
    width: 100%;
}

:deep(.el-step__title) {
    font-size: .24rem;
}

:deep(.el-step__head) {
    height: .5rem;
}

:deep(.el-step__line) {
    position: absolute;
    top: .4rem !important;
}

:deep(.el-step__icon) {
    position: absolute;
    top: .4rem !important;
    transform: translate(-50%, -50%);
}
</style>