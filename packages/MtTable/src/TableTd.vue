<script>
export default {
	name: "TableTd",
	props: ["column", "columnIndex", "rowIndex", "rowData"],
	data() {
		return {};
	},
	inject: ["root"],
	watch: {
		"rowData.selected": function (newValue, oldValue) {
			if (this.column.type !== "selection") return;
			if (newValue === oldValue) return;
			if (!this.root.handleSelectAll) {
				this.root.selectChange();
			}
		},
	},
	computed: {},
	components: {},
	methods: {},
	mounted() {},
	render(h) {
		const data = this.rowData; // 行数据
		const column = this.column; // 列信息
		const colIndex = this.columnIndex;
		const rowIndex = this.rowIndex;
		const title = column.title || data[column.prop];
		return (
			<td
				style={"text-align:" + column.align}
				title={this.root.showTitle ? title : ""}
			>
				{this.column.renderCell(h, data, column, rowIndex)}
			</td>
		);
	},
};
</script>
<style scoped lang="scss">
</style>
