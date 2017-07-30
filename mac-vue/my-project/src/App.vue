<template>
  <div>
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      
    }
  },
  created () {
    this.$root.vm = new Vue();
    this.$root.vm.$on("userId", function (a) {
       localStorage.id = a;
    });
  },
  mounted() {
    
  },
  methods: {
      
  }
}
</script>
<style lang="scss">
  @import "./style/style";
</style>