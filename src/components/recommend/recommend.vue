<template>
  <div class='recommend'>
    <div class="recommend-content">
      <div class="slider-wrapper">
        <slider v-if="recommends.length">
          <div v-for="item  of recommends">
            <a :href="item.linkUrl">
              <img :src="item.picUrl" alt="...">
            </a>
          </div>
        </slider>
      </div>

      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul>
          <li v-for="item in discList" class="item">
            <div class="icon">
              <img width="60" height="60" v-lazy="item.imgurl">
            </div>
            <div class="text">
              <h2 class="name" v-html="item.creator.name"></h2>
              <p class="desc" v-html="item.dissname"></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="loading-container" v-show="!discList.length">
      <loading></loading>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getRecommend, getDiscList} from '../../api/recommend'
  import {ERR_OK} from '../../api/config'
  import Slider from '../slider.vue'
  import Loading from '../loading/loading.vue'


  export default{
    data() {
      return {
        recommends: [],
        discList: []
      }
    },
    components: {Slider,Loading},
    computed: {},
    methods: {
      _getRecommend(){
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider
          }
        })
      },
      _getDiscList() {
        getDiscList().then((res) => {
          if (res.code === ERR_OK) {
            this.discList = res.data.list
          }
        })
      }
    },
    watch: {},
    created(){
      this._getRecommend()
      this._getDiscList()
    },
    mounted(){

    },
    destroyed () {
      clearTimeout(this.timer)
    }
  }
</script>

<style lang="less" scoped type="text/less" rel="stylesheet/less">
  .recommend {
    width: 100%;
    margin-top: 1.1rem;
    .recommend-content {
      height: 100%;
      overflow: hidden;
      .slider-wrapper {
        position: relative;
        width: 100%;
        overflow: hidden;
      }
      .recommend-list {
        background-color: #d6d6d6;
        .list-title {
          height: 65px;
          line-height: 65px;
          text-align: center;
          font-size: .18rem;
          background-color: #999;
          color: #fff;
        }
        .item {
          display: flex;
          box-sizing: border-box;
          align-items: center;
          padding: 0 20px 20px 20px;
          .icon {
            flex: 0 0 60px;
            width: 60px;
            padding-right: 20px;
          }
          .text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;
            line-height: 20px;
            overflow: hidden;
            font-size: 12px;
            .name {
              margin-bottom: 10px;
              color: #666;
            }
            .desc {
              color: #666;
            }
          }
        }
        .loading-container {
          position: absolute;
          width: 100%;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
    .loading-container{
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%)
    }

  }

</style>
