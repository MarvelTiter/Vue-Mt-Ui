<template>
	<td class="cell" :colspan="colspan" rowspan="rowspan">
		<slot></slot>
	</td>
</template>
<script>
export default {
	inject: ["root"],
	props: ["row", "col"],
	data() {
		return {
			colspan: null,
			rowspan: null,
		};
	},
	computed: {},
	methods: {},
	mounted() {
		var span = this.root.CellSpan(this.row, this.col);
		this.colspan = span.col;
		this.rowspan = span.row;
	},
};
</script>
