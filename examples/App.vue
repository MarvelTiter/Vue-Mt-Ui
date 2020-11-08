<template>
	<div id="app" v-mt-loading="loading">
		<mt-select :data="[{ display: 'hhh', value: '1111' }]" display="display" value="value" label="11111"></mt-select>
		<mt-input placeholder="请输入" label="哈哈哈哈"></mt-input>
		<mt-date-picker label="哈哈哈哈"></mt-date-picker>
		<mt-pagination></mt-pagination>
	</div>
</template>
<script>
export default {
	data() {
		return {
			loading: false,
		};
	},
};
</script>
<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
