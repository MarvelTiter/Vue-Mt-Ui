<template>
	<i class="mt-icon iconfont" :class="'icon-'+name"></i>
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
