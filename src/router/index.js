import Recommend from '../components/recommend/recommend.vue'
import Singer from '../components/singer/singer.vue'
import Rank from '../components/rank/rank.vue'
import Search from '../components/search/search.vue'
import Router from 'vue-router'

export default [
  {path: '/recommend', name: 'recommend', component: Recommend},
  {path: '/singer', name: 'singer', component: Singer},
  {path: '/rank', name: 'rank', component: Rank},
  {path: '/search', name: 'search', component: Search},
]

