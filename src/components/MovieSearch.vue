<template>
  <div>
    <div class="title">電影資料庫</div>
    <Input @changeList="listHandler"/>
    <a-table class="ant-table-striped" :columns="columns" size="middle" :data-source="data" :rowClassName="(record, index) => (index % 2 === 1 ? 'table-striped' : null)" bordered :pagination="false" fixed=true>
      <button slot-scope="text, record" slot="detail" href="javascript:;" @click="() => handleDetail(record.key)">詳細資訊</button>
    </a-table>
    <a-spin class="loading" v-if="isLoading"/>
    <a-pagination :default-current="1" :total="total" :current="current" @change="onChange" />
    <a-modal v-model="visible" title="詳細資訊" @ok="handleOk">
      <div>演員: {{detail.actors}}</div>
      <div>類型: {{detail.genre}}</div>
      <div>內容簡介: {{detail.plot}}</div>
    </a-modal>
  </div>
</template>
<script>
import axios from 'axios'
import { message } from 'ant-design-vue';
import Input from './Input.vue'

const columns = [
  {
    title: '名稱',
    dataIndex: 'name',
  },
  {
    title: '類型',
    dataIndex: 'type',
  },
  {
    title: '年份',
    dataIndex: 'years',
  },
  {
    title: '詳細資訊',
    dataIndex: 'details',
    scopedSlots: { customRender: 'detail' } 
  },
];

const key = 'f49ea0b'

export default {
  components: {
    Input
  },
  data() {
    return {
      data: [],
      columns,
      total: 0,
      current: 0,
      visible: false,
      isLoading: true,
      detail: {
        actors: '',
        genre: '',
        plot: ''
      },
      title: '',
      type: '',
      years: ''
    };
  },
  methods: {
    getMovieList(title,page,type='') {
      this.title = title
      this.type = type
      const url = `https://www.omdbapi.com/?apikey=${key}&s=${title}&page=${page}&type=${type}`
      this.isLoading = true
      axios.get(url, {
        headers: {
          accept: "application/json",
        }
      }).then((res) => {
        this.isLoading = false
        const result = res.data.Search
        if(!result) {
          return message.info('查無結果')
        }
        this.total = Number(res.data.totalResults)
        this.data = []
        result.forEach(element => {
          this.data.push({
            key:element.imdbID,
            name:element.Title,
            type:element.Type,
            years:element.Year
          })
        });
      })
      .catch(function (error) {
        console.log(error);  
      })
    },
    onChange(pagination) {
      this.current = Number(pagination)
      this.getMovieList(this.title, this.current, this.type)
    },
    handleDetail(id) {
      this.visible = true;
      this.isLoading = true
      const url = `https://www.omdbapi.com/?apikey=${key}&i=${id}`
      axios.get(url, {
        headers: {
          accept: "application/json",
        }
      }).then((res) => {
        const { Actors, Genre, Plot } = res.data
        this.detail = {
          actors: Actors,
          genre: Genre,
          plot: Plot
        }
        this.isLoading = false
      })
      .catch(function (error) {
        console.log(error);  
      })
    },
    handleOk() {
      this.visible = false;
    },
    listHandler(title, type) {
      this.title = title
      this.type = type
      this.getMovieList(title, 1, type)
    },
  },
  created () {
    this.title = 'test'
    this.getMovieList(this.title,1)
  },
};
</script>
<style>
  .title {
    justify-content: center;
    margin-bottom: 20px;
    display: flex;
    font-size: 35px;
  }
  .table-striped td {
    background-color: #fafafa;
  }
  .ant-pagination {
    display: table;
    margin: 30px auto;
  }
  .loading {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    text-align: center;
    z-index: 99999;
    line-height: 800px;
  }
</style>