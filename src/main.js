import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAnimated from '@codekraft-studio/vue-animated'//https://github.com/codekraft-studio/vue-animated    Pour les animations CSS
import vueSmoothScroll from 'vue2-smooth-scroll' //https://www.npmjs.com/package/vue2-smooth-scroll
import AOS from "aos"//https://michalsnik.github.io/aos/
import "aos/dist/aos.css"//https://michalsnik.github.io/aos/
import VeeValidate from "vee-validate" //https://baianat.github.io/vee-validate/

Vue.use(VeeValidate);

Vue.use(vueSmoothScroll, {
  duration: 750, // Animation speed
  offset: 0, // Offset from element, you can use positive or negative values
  container: '', // the scroll container, default is window,use document.querySelector to query the Element
});

Vue.use(VueAnimated, {
  functional: true,
  defaultDuration: 5000
});

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
