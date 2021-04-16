<demo>
    单标签 - 用 label 代替内容
</demo>

<template>
    <Radio label="JavaScript" v-model:value="labelVal" />
    <Radio label="TypeScript" v-model:value="labelVal" />
    <div class="picked">Picked:{{labelVal}}</div>
</template>

<script lang="ts">
    import Radio from '../lib/Radio.vue';
    import {ref} from 'vue';

    export default {
        name: 'RadioDemo2',
        components:{Radio},
        setup(){
            const labelVal = ref('JavaScript')

            return {labelVal}
        }
    };
</script>

<style lang="scss" scoped>
    .picked{
        padding: 10px 0;
    }
</style>
