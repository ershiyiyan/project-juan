<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },

}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    /* css3盒子模型 */
    box-sizing: border-box;
}
    /* 去掉li 的小圆点 */
li{
    list-style: none;
    display: inline-block;
}
</style>
