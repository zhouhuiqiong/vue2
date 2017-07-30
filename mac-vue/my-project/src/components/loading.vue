<template>
    <div v-show="isLoad">
        加载中
    </div>
</template>

<script>
export default {
  data () {
    return {
      isLoad: this.isLoading
    }
  },
  created () {
  },
  methods: {
      
  }
}
</script>
