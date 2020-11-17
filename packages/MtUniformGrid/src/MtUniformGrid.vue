<script>
export default {
	render(h) {
		this.FilterNode();
		return (
			<div class="mt-uniform-grid">
				<table class="mt-uniform-grid-table">
					{this.Rows.map((rowIndex) => {
						return (
							<tr>
								{this.Columns.map((colIndex) => {
									return (
										<td
											style={this.Padding}
											key={
												rowIndex * this.column +
												colIndex
											}
										>
											{this.SelectNode(
												rowIndex,
												colIndex
											)}
										</td>
									);
								})}
							</tr>
						);
					})}
				</table>
			</div>
		);
	},
	name: "MtUniformGrid",
	props: ["gutter", "column"],
	data() {
		return {
			length: 0,
		};
	},
	computed: {
		Rows() {
			let arr = [];
			let max = Math.ceil(this.length / this.column);
			let index = 0;
			while (index < max) {
				arr.push(index);
				index++;
			}
			return arr;
		},
		Columns() {
			let arr = [];
			let max = this.column;
			let index = 0;
			while (index < max) {
				arr.push(index);
				index++;
			}
			return arr;
		},
		Padding() {
			return {
				padding: this.gutter + "px",
			};
		},
	},
	methods: {
		SelectNode(row, col) {
			var index = row * this.column + col;
			if (index > this.length - 1) return null;
			return this.$slots.default[index];
		},
		FilterNode() {
			var filterNode = this.$slots.default.filter(function (slot) {
				if (slot.tag) return slot;
			});
			this.$slots.default = filterNode;
			this.length = filterNode.length;
		},
	},
};
</script>
<style scoped>
.mt-uniform-grid {
	width: 100%;
	text-align: center;
}
.mt-uniform-grid-table,
.mt-uniform-grid-table tr {
	width: 100%;
	border: none;
	table-layout: fixed;
}
.mt-uniform-grid td {
	border: none;
	vertical-align: middle;
	text-align: center;
}
</style>
