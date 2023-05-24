<template>
    <div class="container">
        <el-card>
            <el-row justify="center">
                <span>登录</span>
            </el-row>
            <el-row class="row-top" justify="center">
                <el-input v-model="Mobile" placeholder="请输入手机号" maxlength="11" clearable></el-input>
            </el-row>
            <el-row class="row-top" justify="space-evenly">
                <el-button type="primary">注册</el-button>
                <el-button type="primary">登录</el-button>
            </el-row>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            Mobile: '',
        }
    },
}
</script>

<style lang="less" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;

    .el-card {
        width: 5.6rem;
        height: 3.5rem;

        span {
            margin-top: .4rem;
            font-size: .6rem;
        }

        .el-input {
            width: 4rem;
            height: .66rem;
            font-size: .32rem;
        }

        .el-button {
            width: 1.4rem;
            height: .6rem;
            font-size: .32rem;
        }
    }

    .row-top {
        margin-top: .25rem;
    }
}
</style>