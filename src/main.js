{
  // require('!style-loader!css-loader!less-loader!./assets/css/reset.css');
  const html = document.documentElement;
  const windowWidth = html.clientWidth;
  html.style.fontSize = windowWidth / 3.75 + 'px';
}
require('babel-polyfill')
import Vue from 'vue'
import Router from 'vue-router'
import fastclick from 'fastclick'
import App from './App.vue'
import routes from './router'

fastclick.attach(document.body)
Vue.config.productionTip = false

Vue.use(Router)
const router = new Router({
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
