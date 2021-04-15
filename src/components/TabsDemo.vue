<template>
    <h1>Tabs 示例</h1>
    <Demo :component="Tabs1Demo" />
    <Attr :columns="columns" :data="data"/>
</template>

<script lang="ts">
    import Demo from './Demo.vue'
    import Tabs1Demo from './Tabs1.demo.vue'
    import Attr from '../lib/Attr.vue'
    import {columns} from "../lib/data";
    import {ref} from 'vue'
    export default {
        components: {
            Demo, Attr
        },
        setup() {
            const data = ref([
                {
                    params: 'selected',
                    desc: 'title',
                    type: 'string',
                    select: 'tab-item',
                    default: '--',
                },
            ]);
            return {
                Tabs1Demo,
                data,
                columns
            }
        }
    }
</script>
