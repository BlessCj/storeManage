<template>
  <div>
    <Header v-bind:sum.sync="sum" />
    <h2>{{sum}}</h2>
    <router-view></router-view>
    <!-- 利用路由元信息展示内容 -->
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  data(){
    return {
      sum:1
    }
  }
  ,
  components: {
    Header,
    Footer,
  },
  // App组件只会执行一次
  mounted() {
    this.$store.dispatch("getCategoryList");
  },
};
</script>

<style>
</style>