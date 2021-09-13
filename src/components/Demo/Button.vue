<template>
  <div>
    <MyButton @click="show">Click me</MyButton>
  </div>
</template>

<!-- 这边使用 lang 为 ts -->
<script lang="ts">
import { Button } from 'ant-design-vue';

export default {
  props: {
    // 父级组件传入的 ctx
    ctx: Object
  },
  mounted() {
    console.log('mounted', this.ctx)
  },
  methods: {
    show(){
      // write your logic code here
      console.log(this.ctx)
      alert('This is Vue `Button onClick` event.')
    }
  },
  components: {
    MyButton: Button,
  }
};
</script>
