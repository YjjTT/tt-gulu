<template>
  <div>
    <h1>Button 示例</h1>
    <Demo :component="Button1Demo" />
    <Demo :component="Button2Demo" />
    <Demo :component="Button3Demo" />
    <Demo :component="Button4Demo" />
    <Demo :component="Button5Demo" />
    <Attr :columns="columns" :data="data"/>
  </div>
</template>

<script lang="ts">
  import {ref} from 'vue'
  import Demo from "./Demo.vue";
  import Button1Demo from "./Button1.demo.vue";
  import Button2Demo from "./Button2.demo.vue";
  import Button3Demo from "./Button3.demo.vue";
  import Button4Demo from "./Button4.demo.vue";
  import Button5Demo from "./Button5.demo.vue";
  import Attr from '../lib/Attr.vue'
  import {columns} from "../lib/data";

  export default {
    components: {
      Demo, Attr
    },
    setup() {
      const data = ref([
        {
          params: 'theme',
          desc: '按钮主题',
          type: 'string',
          select: 'default / link / text',
          default: 'default',
        },
        {
          params: 'size',
          desc: '尺寸大小',
          type: 'string',
          select: 'big / small / normal',
          default: 'normal',
        },
        {
          params: 'level',
          desc: '按钮等级',
          type: 'string',
          select: 'main / danger / normal',
          default: 'normal',
        },
        {
          params: 'disabled',
          desc: '是否禁用',
          type: 'boolean',
          select: 'true / false',
          default: 'false',
        },
        {
          params: 'loading',
          desc: '是否加载',
          type: 'boolean',
          select: 'false / true',
          default: 'false',
        }
      ])
      return {
        Button1Demo,
        Button2Demo,
        Button3Demo,
        Button4Demo,
        Button5Demo,
        data,
        columns
      };
    },
  };
</script>
