<template>
    <div class="container">
        <el-container>
            <!-- 头部区域 -->
            <el-header>
                <MySteps :activeStep="activeStep"></MySteps>
            </el-header>
            <!-- 主要区域 -->
            <el-main>
                <!-- 上一步与下一步按钮 -->
                <el-row justify="space-between">
                    <el-button class="button-steps" @click="backStep" :disabled="activeStep === 0">上一步</el-button>
                    <el-button class="button-steps" @click="nextStep" :disabled="activeStep === 5">下一步</el-button>
                </el-row>
                <el-row>

                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import MySteps from './components/steps/index.vue'

export default {
    name: 'CreateCharacter',
    data() {
        return {
            activeStep: 0,
        }
    },
    components: { MySteps },
    methods: {
        backStep() {
            if (this.activeStep > 0) this.activeStep--
        },
        nextStep() {
            if (this.activeStep < 5) this.activeStep++
        },
    }
}
</script>

<style lang="less" scoped>
.el-container {

    // 头部区域
    .el-header {
        width: 100%;
        height: 1.2rem;
        position: relative;
    }

    // 主要区域
    .el-main {
        margin: 0;
        padding: 0;
        width: 100%;
        position: relative;

        // 上一步和下一步按钮
        .el-row {
            .button-steps {
                margin: 0 .3rem;
                width: 1.2rem;
                height: .6rem;
                font-size: .25rem;
            }
        }
    }
}
</style>