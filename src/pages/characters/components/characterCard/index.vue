<template>
    <div class="container">
        <el-card>
            <el-descriptions title="角色卡" column="2">
                <template #extra>
                    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                        <path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>
                    </svg>
                </template>
                <el-descriptions-item label="名称">{{ character.name }}</el-descriptions-item>
                <el-descriptions-item label="等级">{{ character.level }}</el-descriptions-item>
                <el-descriptions-item label="种族">{{ character.race }}</el-descriptions-item>
                <el-descriptions-item label="职业">{{ character.class }}</el-descriptions-item>
                <el-descriptions-item label="创建时间">{{ character.createTime }}</el-descriptions-item>
            </el-descriptions>
            <el-button id="button-play">play</el-button>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'CharacterCard',
    data() {
        return {
            character: {
                name: 'name',
                level: 13,
                race: 'race',
                class: 'class',
                createTime: '2023-05-23'
            }
        }
    }
}
</script>

<style lang="less" scoped>
.container {
    width: auto;
    height: fit-content;
}

.el-card {
    padding: .25rem 0 .1rem .3rem;

    .el-descriptions {
        svg {
            width: .2rem;
            height: .2rem;
            margin-right: .3rem;
        }
    }

    #button-play {
        position: absolute;
        right: .3rem;
        bottom: .2rem;
    }
}
</style>