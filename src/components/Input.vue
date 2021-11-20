<template>
  <div class="input__section">
    <a-input v-model="title" placeholder="請輸入電影名稱" />
    <a-input v-model="type" placeholder="請輸入電影類型" />
    <a-button type="primary" @click="onClcik">搜尋</a-button>
  </div>
</template>
<script>
export default {
  props : {
    getMovieList:Function
  },
  data() {
    return {
      title: '',
      type: ''
    }
  },
  methods: {
    onClcik() {
      this.getMovieList(this.title, 1, this.type)
    },
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