<template>
    <h1>Dialog 示例</h1>
    <Demo :component="Dialog1Demo" />
    <Demo :component="Dialog2Demo" />
    <Attr :columns="columns" :data="data"/>
</template>

<script lang="ts">
    import {ref} from 'vue'
    import Demo from './Demo.vue';
    import Dialog1Demo from './Dialog1.demo.vue';
    import Dialog2Demo from './Dialog2.demo.vue';
    import Attr from '../lib/Attr.vue'
    import {columns} from "../lib/data";
    export default {
        components: {
            Demo, Attr
        },
        setup() {
            const data = ref([
                {
                    params: 'visible',
                    desc: '是否展示',
                    type: 'boolean',
                    select: 'true / false',
                    default: 'normal',
                },
                {
                    params: 'closeOnClickOverlay',
                    desc: '是否点击遮罩层关闭弹出框',
                    type: 'boolean',
                    select: 'true / false',
                    default: 'false',
                },
                {
                    params: 'ok',
                    desc: '确认触发函数',
                    type: 'function',
                    select: '()=>{}',
                    default: '--',
                },
                {
                    params: 'cancel',
                    desc: '取消触发函数',
                    type: 'function',
                    select: '()=>{}',
                    default: '--',
                },
            ]);
            return {
                Dialog1Demo,
                Dialog2Demo,
                data,
                columns
            }
        }
    }
</script>
