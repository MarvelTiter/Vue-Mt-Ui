<template>
	<div class="mt-table">
		<table>
			<table-header></table-header>
			<table-body></table-body>
		</table>
	</div>
</template>
<script>
export default {
	name: "MtTable",
	props: {
		columns: [Array, Object],
		data: [Array, Object],
	},
	render(h) {
		return (
			<div>
				<table></table>
			</div>
		);
	},
};
</script>

<style>
</style>
