import Vue from 'vue';
import 'ant-design-vue/dist/antd.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Button from 'ant-design-vue/lib/button'
import Table from 'ant-design-vue/lib/table';
import Input from 'ant-design-vue/lib/input';
import Pagination from 'ant-design-vue/lib/pagination';
import Modal from 'ant-design-vue/lib/modal';
import Spin from 'ant-design-vue/lib/spin';
import App from './App';

Vue.use(VueAxios, axios)
Modal.install(Vue)
Vue.component(Button.name, Button);
Vue.component(Table.name, Table);
Vue.component(Input.name, Input);
Vue.component(Pagination.name, Pagination);
Vue.component(Modal.name, Modal);
Vue.component(Spin.name, Spin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
