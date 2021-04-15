<template>
    <div>
        <h1>Input 示例</h1>
        <Demo :component="InputDemo1" />
        <Demo :component="InputDemo2" />
        <Demo :component="InputDemo3" />
        <Attr :columns="columns" :data="data"/>
    </div>
</template>

<script lang="ts">
    import {ref} from 'vue'
    import Demo from "./Demo.vue";
    import InputDemo1 from './Input1.demo.vue';
    import InputDemo2 from './Input2.demo.vue';
    import InputDemo3 from './Input3.demo.vue';
    import Attr from '../lib/Attr.vue'
    import {columns} from "../lib/data";

    export default {
        components: {
            Demo, Attr
        },
        setup() {
            const data = ref([
                {
                    params: 'placeholder',
                    desc: '占位符',
                    type: 'string',
                    select: '任意字符串',
                    default: '空',
                },
                {
                    params: 'name',
                    desc: 'name属性',
                    type: 'string',
                    select: '任意字符串',
                    default: '空',
                },
                {
                    params: 'type',
                    desc: '文本框类型',
                    type: 'string',
                    select: '支持所有原生input的类型',
                    default: 'text',
                },
                {
                    params: 'disabled',
                    desc: '禁用',
                    type: 'boolean',
                    select: 'false/true',
                    default: 'false',
                },
            ]);
            return {
                InputDemo1,
                InputDemo2,
                InputDemo3,
                data,
                columns
            };
        },
    };
</script>
