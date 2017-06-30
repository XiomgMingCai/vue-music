<template>
  <div class="tabar">
    <ul class="tab">
      <li class="tab-item">
        <router-link tag="span" to="recommend">
          <div class="tab-text">推荐</div>
        </router-link>
      </li>

      <li class="tab-item">
        <router-link tag="span" to="singer">

          <div class="tab-text">歌手</div>
        </router-link>
      </li>
      <li class="tab-item ">
        <router-link tag="span" to="rank">
          <div class="tab-text">排行</div>
        </router-link>
      </li>

      <li class="tab-item">
        <router-link tag="span" to="search">
          <div class="tab-text">搜索</div>
        </router-link>
      </li>
    </ul>
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
  .tabar {
    width: 100%;
    position: fixed;
    top: .45rem;
    height: .65rem;
    line-height: .65rem;

    .tab{
      background-color: #999;
      .tab-item {

        span {
          &.router-link-active {
            color: #039be5;
          }
        }
      }
    }

    .tab {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-wrap: nowrap;
      flex-wrap: nowrap;
      -webkit-align-self: center;
      align-self: center;
    }

    .tab-item {
      width: 100%;
      position: relative;
      font-size: 0.16rem;
      text-align: center;
      color: #212121;
      margin-left: -1px;
      -webkit-box-flex: 1;
      box-flex: 1;
    }

    .tab-active {
      color: #039be5;
    }
  }
</style>
