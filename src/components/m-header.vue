<template>
  <div class='header'>
    <header>
      我是header
    </header>
  </div>
</template>

<script type="text/ecmascript-6">
  // import logHeader from './log-header.vue'
  export default{
    data() {
      return {}
    },
    components: {},
    computed: {},
    methods: {},
    watch: {},
    mounted(){

    }
  }
</script>

<style lang="less" scoped type="text/less" rel="stylesheet/less">
  /*@import '../../assets/css/variable.less';*/

  .header {
    width: 100%;
    position: fixed;
    top: 0;
    header {
      height: .45rem;
      line-height: .45rem;
      background-color: #9bdc54;
      text-align: center;
      font-size: .2rem;
    }
  }
</style>
