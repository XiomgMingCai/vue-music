<template>
  <div class='liading'>
    <img width="24" height="24" src="./loading.gif" alt="加载...">

    <p class="desc">{{title}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  // import logHeader from './log-header.vue'
  export default{
    props: {
      title: String,
      default: '正在载入...'
    },
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
  .liading {
    width: 100%;
    text-align: center;
    .desc{
      line-height: 20px;
      font-size: .15rem;
      color: #000;
    }
  }
</style>
