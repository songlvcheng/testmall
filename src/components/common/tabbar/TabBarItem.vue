<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-activeicon"></slot>
    </div>
    <div :style="isActivestyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activecolor: {
      type: String,
      default: "red",
    },
  },
  computed: {
    isActive() {
      //当前活跃的路由path包含我们传过来的path 就是出于活跃
      return this.$route.path.indexOf(this.path) !== -1;
    },
    isActivestyle() {
      //动态绑定样式。处于活跃是activecolor 不活跃也就isActive为flase为一个空的对象
      return this.isActive ? { color: this.activecolor } : {};
    },
  },
  methods: {
    itemclick() {
      //当点击了哪个item,就把路由设置为对应item传递过来的path
      this.$router.replace(this.path);
    },
  },
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  vertical-align: middle;
  margin-top: 3px;
}
</style>

