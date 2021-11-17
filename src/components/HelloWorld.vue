<template>
  <div>
    <div class="title">電影資料庫</div>
    <div class="input__section">
      <a-input v-model="value" placeholder="請輸入電影名稱" />
      <a-button type="primary" @click="onClcik">搜尋</a-button>
    </div>
    <a-table :columns="columns" :data-source="data" @change="onChange">
      <button slot="action" href="javascript:;">詳細資訊</button>
    </a-table>
  </div>
</template>
<script>
import axios from 'axios'
const columns = [
  {
    title: '名稱',
    dataIndex: 'name',
    // onFilter: (value, record) => record.name.indexOf(value) === 0,
    // sorter: (a, b) => a.name.length - b.name.length,
    // sortDirections: ['descend'],
  },
  {
    title: '類型',
    dataIndex: 'type',
    defaultSortOrder: 'descend',
    // sorter: (a, b) => a.age - b.age,
  },
  {
    title: '年份',
    dataIndex: 'years',
    // filterMultiple: false,
    // onFilter: (value, record) => record.address.indexOf(value) === 0,
    // sorter: (a, b) => a.address.length - b.address.length,
    // sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'details',
    dataIndex: 'details',
    scopedSlots: { customRender: 'action' } 
  },
];

const data = [
  // {
  //   key: '1',
  //   name: 'John Brown',
  //   type: 'movie',
  //   years: 1996,
  //   // details:321,
  //   slots: { customRender: 'details' },
  // },
  // {
  //   key: '2',
  //   name: 'Jim Green',
  //   age: 42,
  //   address: 'London No. 1 Lake Park',
  // },
  // {
  //   key: '3',
  //   name: 'Joe Black',
  //   age: 32,
  //   address: 'Sidney No. 1 Lake Park',
  // },
  // {
  //   key: '4',
  //   name: 'Jim Red',
  //   age: 32,
  //   address: 'London No. 2 Lake Park',
  // },
];

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

export default {
  data() {
    return {
      data,
      columns,
      value: ''
    };
  },
  // computed: {
  //   total() {
  //     this.data.fi
  //     return 1 + 1
  //   }
  // },
  methods: {
    onChange,
    onClcik() {
      const key = 'f49ea0b'
      const url = `https://www.omdbapi.com/?apikey=${key}&t=${this.value}`
      axios.get(url, {
          headers: {
              accept: "application/json",
          }
      }).then((res) => {
        data.push({
          name:res.data.Title,
          type:res.data.Type,
          years:res.data.Year
        })
      })  //成功拿到資料後讓回傳的資料匯入Vue的data中
          .catch(function (error) {
              console.log(error);  //失敗的話回傳連線異常
          })
      }
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
.input__section {
  display: flex;
  margin: 0px auto;
  width: 15%;
  margin-bottom: 20px;
}
.input__section > button {
  margin-left: 7px;
}
</style>