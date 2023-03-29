<template>
  <div class="pagination">
    <!-- 上 -->
    <button :disabled="pageNo === 1" @click="$emit('JumpNo', pageNo - 1)">
      上一页
    </button>
    <button
      v-if="StartAndEnd.start > 1"
      @click="$emit('JumpNo', 1)"
      :class="{ active: pageNo == 1 }"
    >
      1
    </button>
    <button v-if="StartAndEnd.start > 2">···</button>
    <!-- v-for可以遍历数字中 -->
    <!-- 嵌套使用用template包裹 -->
    <template v-for="(page, index) in StartAndEnd.end">
      <button
        v-if="page >= StartAndEnd.start"
        :key="index"
        @click="$emit('JumpNo', page)"
        :class="{ active: pageNo == page }"
      >
        {{ page }}
      </button>
    </template>
    <!-- 下 -->
    <button v-if="StartAndEnd.end < totalPage - 1">···</button>
    <button
      v-if="StartAndEnd.end < totalPage"
      @click="$emit('JumpNo', totalPage)"
      :class="{ active: pageNo == totalPage }"
    >
      {{ totalPage }}
    </button>
    <button
      @click="$emit('JumpNo', pageNo + 1)"
      :disabled="pageNo == totalPage"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ totalPage }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    // 总页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    StartAndEnd() {
      let { pageNo, pageSize, total, continues } = this;
      let start,
        end = 0;
      // Math.floor(continues/2)得到加或者减的页数
      start = pageNo - Math.floor(continues / 2);
      end = pageNo + Math.floor(continues / 2);
      if (start < 1) {
        start = 1;
        end = continues;
      }
      if (end > this.totalPage) {
        end = this.totalPage;
        start = this.totalPage - continues + 1;
      }

      return { start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: right;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }
    &.active {
      cursor: not-allowed;
      background-color: blue;
      color: #fff;
    }
  }
}
</style>