import Vue from 'vue';
import './index.css'
import { Icon } from '@iconify/vue2';
// import indexView from "./IndexView.vue"
import HomeView from "./HomeView.vue"
// import Swiper from 'swiper';
Vue.component('Icon', Icon);
//页面打开，请求自动发送
// 请求回来的数据还要渲染到页面上 （数据驱动视图的框架）
// 数据驱动试图变化的条件：数据必须是响应式的数据（data） + 数据必须通过模板语法绑定到模板中
// vue中this的指向问题：methods中所有函数(不要箭头函数)的this指向vm(vue的实例)
const vm = new Vue({
  el: '#app',
  data: {
    swiper: null
  },
  render: h => h(HomeView),
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      this.swiper = new Swiper(".mySwiper", {
        autoplay: true, // 自动播放
        disableOnInteraction: false, // 鼠标交互后不停止自动播放
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">'  + "</span>";
          },
        },
      });
    }
  }
});

// console.log(vm);
// 以_开头的变量名属性名是私有变量或属性，不希望他人使用
// 一般情况下：我们在实例化vue传递的配置项a ===> $a
// el ===> $el
// data ==> $data
// this.msg === this.$data.msg  对象属性代理
