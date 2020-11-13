<template>
	<i class="iconfont" :class="'icon-'+name"></i>
</template>

<script>
export default {
	name: "MtIcon",
	props: {
		name: String,
	},
};
</script>
<style scoped>
</style>
