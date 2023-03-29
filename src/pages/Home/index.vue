<template>
  <div>
    <!-- 三级联动组件 -->
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <!-- props传递数据给floor组件 -->
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"/>
    <Brand/>
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer"
import Recommend from "@/pages/Home/recommend"
import Rank from "@/pages/Home/Rank"
import Like from "@/pages/Home/Like"
import Floor from "@/pages/Home/Floor"
import Brand from "@/pages/Home/Brand"
import { mapState } from "vuex";
export default {
  name:"Home",
  components:{
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand
  },
  mounted() {
    // 传给mutations用commit 传给actions用dispatch
    // 派发请求给actions执行
    this.$store.dispatch('getListFloor')
    this.$store.dispatch('getTokenInf')
  },
  computed:{
    // mapstate将state变成计算属性，可直接使用
    ...mapState({
      floorList:(state)=>state.home.listFloor
    })
  }
}
</script>

<style>

</style>