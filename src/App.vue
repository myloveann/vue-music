<template>
  <div id="app">
    <my-header></my-header>
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
import MHeader from 'components/my-header/my-header.vue'
import Tab from 'components/tab/tab.vue'
export default {
  components:{
    MHeader,
    Tab
  }
}
</script>

<style lang="stylus">
  @import "common/stylus/variable";
  #app{
    color:$theme-color
  }
</style>

