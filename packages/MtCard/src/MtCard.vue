<template>
	<div class="mt-card">
		<div class="mt-card-header" v-if="headerInserted">
			<slot name="header"></slot>
		</div>
		<div class="mt-card-body">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "MtCard",
	mounted: function () {
		if (this.$slots.header) this.headerInserted = true;
	},
	data: function () {
		return {
			headerInserted: false,
		};
	},
};
</script>

<style scope>
.mt-card {
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	border: 1px solid #ebeef5;
	background-color: #fff;
	/* overflow: hidden; */
	color: #303133;
	border-radius: 4px;
}

.mt-card .mt-card-header {
	padding: 18px 20px;
	border-bottom: 1px solid #ebeef5;
}

.mt-card .mt-card-body {
	padding: 20px;
}
</style>
