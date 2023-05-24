<template>
    <div class="container" id="container">
        <CharacterCard class="row-top"></CharacterCard>
        <CharacterCard class="row-top"></CharacterCard>
        <el-row class="row-top row-bottom" justify="center">
            <svg id="svg-plus" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                <path fill="currentColor" d="M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"></path>
                <path fill="currentColor" d="M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0z"></path>
                <path fill="currentColor" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"></path>
            </svg>
        </el-row>
    </div>
</template>

<script>
import CharacterCard from '/src/components/characterCard/index.vue'

export default {
    name: 'Characters',
    components: { CharacterCard }
}
</script>

<style lang="less" scoped>
#container {
    padding: 0 .3rem;
    width: auto;
    height: auto;

    #svg-plus {
        width: .5rem;
        height: .5rem;
    }
}

.row-top {
    margin-top: .3rem;
}

.row-bottom {
    margin-bottom: .3rem;
}
</style>