import Vue from 'vue';
import App from './App.vue';
import HighchartsVue from 'highcharts-vue';

import '@/assets/style/index.css';

Vue.use(HighchartsVue);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
