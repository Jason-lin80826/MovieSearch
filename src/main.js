import Vue from 'vue';
import 'ant-design-vue/dist/antd.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Button from 'ant-design-vue/lib/button'
import Table from 'ant-design-vue/lib/table';
import Input from 'ant-design-vue/lib/input';
import App from './App';

Vue.use(VueAxios, axios)
Vue.component(Button.name, Button);
Vue.component(Table.name, Table);
Vue.component(Input.name, Input);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
