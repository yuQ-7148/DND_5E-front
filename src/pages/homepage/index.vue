<template>
    <div class="container">
        <el-container>
            <el-header>
                <svg id="svg-expand" @click="isDrawer = !isDrawer" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                    <path fill="currentColor" d="M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"></path>
                </svg>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>

    <!-- 侧边抽屉 -->
    <el-drawer v-model="isDrawer"
               direction="ltr"
               size="40%"
               title="菜单">
        <el-menu :default-active="activeIndex"
                 :router="true"
                 :unique-opened="true"
                 active-text-color="#822000"
                 @select="handleSelect">
            <el-menu-item index="/characters">
                <span>角色管理</span>
            </el-menu-item>
            <el-sub-menu index="basicRules">
                <template #title>
                    <span>基础入门规则</span>
                </template>
                <el-menu-item index="/howtoplay">如何游戏</el-menu-item>
                <el-menu-item index="/combat">战斗</el-menu-item>
                <el-menu-item index="/adventuring">冒险</el-menu-item>
                <el-menu-item index="/spellcasting">施法</el-menu-item>
                <el-menu-item index="/conditions">状态</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="playershandbook">
                <template #title>
                    <span>玩家手册</span>
                </template>
                <el-menu-item-group title="基础入门规则">
                    <el-menu-item index="/combat">战斗</el-menu-item>
                    <el-menu-item index="/adventuring">冒险</el-menu-item>
                    <el-menu-item index="/spellcasting">施法</el-menu-item>
                    <el-menu-item index="/conditions">状态</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
        </el-menu>
    </el-drawer>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            isDrawer: false,
            activeIndex: '/characters'
        }
    },
    mounted() {
        // 获取激活菜单index
        if (window.sessionStorage.getItem('activeIndex') === "" || window.sessionStorage.getItem('activeIndex') === null) {
            window.sessionStorage.setItem('activeIndex', this.activeIndex)
        } else {
            this.activeIndex = window.sessionStorage.getItem('activeIndex')
        }
    },
    methods: {
        // 更新激活菜单index
        handleSelect(activeIndex) {
            this.activeIndex = activeIndex
            window.sessionStorage.setItem('activeIndex', this.activeIndex)
        }
    }
}
</script>

<style lang="less" scoped>
.container {
    font-size: .4rem;

    .el-container {
        width: 100%;
        height: 100%;
    }

    // 顶栏容器
    .el-header {
        position: fixed;
        top: 0;
        display: flex;
        align-items: center;
        width: 7.6rem;
        height: .9rem;
        background-color: rgb(255, 255, 0);

        #svg-expand {
            width: .6rem;
            height: .6rem;
        }
    }

    // 主要区域容器
    .el-main {
        margin-top: .9rem;
        padding: 0;
        height: 100%;
        background-color: rgb(172, 255, 47);
    }
}

// 侧边抽屉
.el-drawer {
    .el-menu {
        span {
            font-size: .25rem;
        }

        .el-menu-item {
            font-size: .2rem;
        }
    }
}
</style>