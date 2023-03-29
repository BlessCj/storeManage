<template>
  <div class="swiper-container" ref="floor1Swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(img, index) in list" :key="img.id">
        <img :src="img.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: ["list"],
  watch: {
    list: {
      // 父组件传过来的数据，不会自动发生变化，所以需要一上来就要开启监听
      immediate: true,
      handler(nval, oval) {
        this.$nextTick(() => {
          new Swiper(this.$refs.floor1Swiper, {
            loop: true, // 循环模式选项
            autoplay: {
              delay: 3000,
              stopOnLastSlide: false,
              disableOnInteraction: true,
            },
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            // 如果需要滚动条
            scrollbar: {
              el: ".swiper-scrollbar",
              clickable: true,
            },
          });
        });
      },
    },
  },
};
</script>

<style>
</style>