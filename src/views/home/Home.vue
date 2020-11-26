<template>
  <div id="home">
    <nav-bar class="home-navbar"><div slot="center">购物街</div></nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.home-navbar {
  background-color: #ff8098;
  color: #fff;
}
</style>