<template>
  <!-- 商品分类导航 -->

  <div class="type-nav">
    <div class="container">
      <!-- 事件委托 当离开父div背景样式才会消失 -->
      <div @mouseleave="changeOutIndex" @mouseenter="changeShow">
        <h2 class="all">全部商品分类</h2>
        <!-- 过渡动画要用transition包裹 -->
        <transition name="cj">
          <div class="sort" v-show="show">
            <div class="all-sort-list2" @click="goSearch">
              <!-- 一级菜单 -->
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
              >
                <!-- 在Vue中，可以使用对象语法或数组语法来动态添加class类变量，而里面变量不需要使用this。 
            当值为真就显示，为假就不显示
            -->
                <h3
                  :class="{ isActive: currentIndex === index }"
                  @mouseenter="changeIndex(index)"
                >
                  <a
                    :data-categoryName="c1.categoryName"
                    :data-categoryId1="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                  <!-- router-link每次触碰都会生成一个组件,所以会卡顿不建议使用 -->
                  <!-- <router-link to="/search">{{ c1.categoryName }}</router-link> -->
                </h3>
                <!-- 动态增加style让二三级菜单显示 -->
                <div
                  class="item-list clearfix"
                  :style="{
                    display: currentIndex === index ? 'block' : 'none',
                  }"
                >
                  <!-- 二级菜单  -->
                  <div
                    class="subitem"
                    v-for="(c2, index) in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="c2.categoryName"
                          :data-categoryId2="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <!-- 三级菜单 -->
                        <em
                          v-for="(c3, index) in c2.categoryChild"
                          :key="c3.categoryId"
                        >
                          <a
                            :data-categoryName="c3.categoryName"
                            :data-categoryId3="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      // 改变一级菜单背景颜色下标值
      currentIndex: -1,
      show: true,
    };
  },
  methods: {
    // 节流写法出现样式下标控制
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
      // console.log(index);
    }, 200),
    // 移出样式下标控制
    changeOutIndex() {
      this.currentIndex = -1;
      // 在search页面鼠标进入才显示
      if (this.$route.name !== "home") {
        this.show = false;
      }
    },
    //用事件委托实现点击跳转，传递参数query给search
    // 有params参数也一并传过去
    goSearch(e) {
      // e.target.dataset获取自定义属性名
      // console.log(e.target.dataset);
      let { categoryname, categoryid1, categoryid2, categoryid3 } =
        e.target.dataset;
      // categoryname: '家居家装', categoryid1: '5'
      let location = { name: "search" };
      // query传递参数
      let query = {
        categoryName: categoryname,
      };
      if (categoryid1) {
        query.categoryId1 = categoryid1;
      } else if (categoryid2) {
        query.categoryId2 = categoryid2;
      } else {
        query.categoryId3 = categoryid3;
      }
      // 有params参数也一并传过去
      if(this.$route.params){
      location.params = this.$route.params
      }
      location.query = query;
      this.$router.push(location);
    },
    // 改变三级列表的显示和隐藏
    changeShow() {
      if (this.$route.name !== "home") {
        this.show = true;
      }
    },
  },
  mounted() {
    //放在这里每次用这组件就会请求服务器，很费时间（所以放在APP组件中只请求一次服务），一挂载就从服务器获取数据，并存入store中的state
    // this.$store.dispatch("getCategoryList");
    // 每次引用该组件都会触发mounted挂载函数
    if (this.$route.name === "search") {
      this.show = false;
    }
    // console.log("我执行了");
  },
  computed: {
    ...mapState({
      // 值为一个函数时 返回的是整个store里面的组件数据，需要按需获取值
      categoryList: (state) => state.home.categoryList,
    }),
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      
      
      .all-sort-list2 {
        .item {
          h3 {
            line-height: 28px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }
          .isActive {
            background-color: skyblue;
          }
          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }
                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }
                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;
                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
      }
    }
    // 过度样式
      .cj-enter {
        opacity: 0;
      }
      .cj-enter-active {
        transition: all .2s linear;
      }
      .cj-enter-to {
        opacity: 1;
      }
  }
}
</style>