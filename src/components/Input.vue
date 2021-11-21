<template>
  <div class="input__section">
    <a-input v-model="title" placeholder="請輸入電影名稱" />
    <a-input v-model="type" placeholder="請輸入電影類型" />
    <a-button type="primary" @click="onClcik">搜尋</a-button>
  </div>
</template>
<script>
import { message } from 'ant-design-vue';

export default {
  data() {
    return {
      title: '',
      type: ''
    }
  },
  methods: {
    onClcik() {
      if(!this.title) {
        return message.info('請輸入電影名稱');
      }
      this.$emit('changeList',this.title,this.type)
    }
  }
}
</script>
<style>
  .input__section {
    display: flex;
    margin: 0px auto;
    width: 25%;
    margin-bottom: 20px;
  }
  .input__section > button {
    margin-left: 7px;
  }
  .input__section input {
    margin-left: 5px;
  }
</style>