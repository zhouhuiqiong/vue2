<template>
  <a class="tab-item" v-link="{path: path, activeClass: 'active', replace: true}">
    <span class="navicon" :class="iconClass"></span>
    <span class="tab-label" v-text="label"></span>
  </a>
</template>
<script>
export default {
	props () {
		return {
			path: '',
		    icon: '',
		    label: ''
		}
	},
	methods: {
		iconClass () {
	      return `icon-${this.icon}`
	    }
	}
};
</script>
