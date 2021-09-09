<template>
  <div>
    <h1>Hello App!</h1>
    <p>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import VueRouter from "vue-router";
import Vue from "vue";
import Foo from "./Foo.vue";
import Bar from "./Bar.vue";
import { config } from "vuera";

const routes = [
  { path: "/foo", component: Foo },
  { path: "/bar", component: Bar },
];

const router = new VueRouter({
  routes,
});

Vue.use(VueRouter);

// vuera config, 用于注入 vue router 
config.vueInstanceOptions = { router };

export default {
  props: {
  	// this.props 属性中可以拿到原 container 中的所有属性方法  
    ctx: Object
  },
  components: {
    Foo: Foo,
    Bar: Bar,
  },
};
</script>

<style></style>
