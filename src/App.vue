<template>
  <div class='App'>
    <m-header></m-header>
    <m-tab></m-tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from './components/m-header.vue'
  import Tabar from './components/tabar.vue'
  export default{
    data() {
      return {}
    },
    components: {
      MHeader,
      'm-tab': Tabar
    },
    computed: {},
    methods: {},
    watch: {},
    mounted(){

    },



  }
</script>

<style lang="less" scoped type="text/less" rel="stylesheet/less">
  /*@import '../../assets/css/variable.less';*/

  .App {
    width: 100%;

  }
</style>
