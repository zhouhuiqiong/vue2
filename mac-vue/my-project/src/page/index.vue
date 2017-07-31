<template>
  <div>
    <loading v-show="isLoad"></loading>
    <button @click="loadHanld">隐藏loading</button>
      <img src="../../static/images/1.jpg">
    {{name | uppercase}} 

    <h1 class="logo" v-infinite-scroll="{ color: 'white', text: 'hello!' }" >cnodejs Api Test</h1>
    <ul class="list">
      <li v-for="item in lists" v-text="item.title"></li>
    </ul>
  </div>
</template>
<script>
import loading from '../components/loading'
export default {
  data () {
    return {
      lists: [],
      name: "wheh",
      isLoad: true
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.get_data()
    this.add();
    
  },
  methods: {
    ...mapMutations(['SET']),
    loadHanld () {
        this.isLoad = !this.isLoad;
    },
    get_data (params) {
      if (!params) params = {}
      this.$api.get('topics', params, r => {
        this.lists = r.data
      })
    }
  },
  components: {
    loading
  },
  filters: {
    subStr: function (value) {
      value.replace(/<.+>|\s/, '')
      return value.slice(0, 30)
    }
  }
}
</script>