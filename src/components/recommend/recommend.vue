<template>
  <div class='recommend'>
    Lorem ipsum dolor sit amet.
  </div>
</template>

<script type="text/ecmascript-6">
  import {getRecommend} from '../../api/recommend'
  import {ERR_OK} from '../../api/config'
  export default{
    data() {
      return {}
    },
    components: {},
    computed: {},
    methods: {
      _getRecommend(){
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            console.log(res.data.slider);
          }
        })
      }
    },
    watch: {},
    created(){
      this._getRecommend()
    },
    mounted(){
    }
  }
</script>

<style lang="less" scoped type="text/less" rel="stylesheet/less">
  /*@import '../../assets/css/variable.less';*/

  .recommend {
    width: 100%;
    margin-top: 1.1rem;
  }
</style>
