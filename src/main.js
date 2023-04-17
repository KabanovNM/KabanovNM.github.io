import Vue from 'vue';
import App from './App.vue';
import HighchartsVue from 'highcharts-vue';

import '@/assets/style/index.css';

Vue.use(HighchartsVue);

Vue.directive('click-outside', {
  bind(el, binding) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value();
      }
    };

    document.addEventListener('click', el.clickOutsideEvent);
  },
  unbind(el) {
    document.removeEventListener('click', el.clickOutsideEvent);
  },
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
