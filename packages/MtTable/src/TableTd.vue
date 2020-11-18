<script>
export default {
	name: "TableTd",
	props: ["column", "columnIndex", "rowIndex", "rowData"],
	data() {
		return {};
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
		return (
			<td style={"text-align:" + column.align} class="mt-table__table_td">
				{this.column.renderCell(data, column, rowIndex)}
			</td>
		);
	},
};
</script>
<style scoped lang="scss">
</style>
