<!--
<template>
	<div class="mt-uniform-grid">
		<table class="mt-uniform-grid-table">
			<tr class="row" v-for="rowIndex of Rows" :key="rowIndex">
				<UniformGridItem v-for="colIndex of Columns" :key="rowIndex*column + colIndex" :row="rowIndex" :col="colIndex"></UniformGridItem>
			</tr>
		</table>
	</div>
</template>
-->
<script>
import UniformGridItem from "./UniformGridItem";
export default {
	render(h) {
		this.FilterNode();
		return (
			<div class="mt-uniform-grid">
				<table class="mt-uniform-grid-table">
					{this.Rows.map((rowIndex) => {
						return (
							<tr class="row">
								{this.Columns.map((colIndex) => {
									return (
										<UniformGridItem
											style={this.Padding}
											row={rowIndex}
											col={colIndex}
											key={
												rowIndex * this.column +
												colIndex
											}
										>
											{this.SelectNode(
												rowIndex,
												colIndex
											)}
										</UniformGridItem>
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
	props: {
		gutter: { type: Number, default: 0 },
		column: { type: Number, default: 5 },
		rowspan: Number,
		colspan: Number,
	},
	provide() {
		return { root: this };
	},
	data() {
		return {
			length: 0,
			renderCell: null,
		};
	},
	components: { UniformGridItem },
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
			let max = this.length < this.column ? this.length : this.column;
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
			// return this.children[index];
		},
		FilterNode() {
			if (this.$slots.default === undefined) return;
			var filterNode = this.$slots.default.filter(function (slot) {
				if (slot.tag) return slot;
			});
			this.$slots.default = filterNode;
			this.length = filterNode.length;
		},
		CellSpan(row, col) {
			var node = this.SelectNode(row, col);
			if (
				node === undefined ||
				node === null ||
				node.child === undefined ||
				node.child === null
			) {
				return { col: 1, row: 1 };
			}
			var c = node.child.colspan;
			var r = node.child.rowspan;
			return {
				col: c || 1,
				row: r || 1,
			};
		},
	},
	created() {
		this.renderCell = (row, col) => {
			var node = this.SelectNode(row, col);
			return node;
		};
	},
};
</script>
<style scoped>
.mt-uniform-grid {
	width: 100%;
	text-align: center;
}
.mt-uniform-grid-table,
.mt-uniform-grid-table .row {
	width: 100%;
	border: none;
	table-layout: fixed;
}
.mt-uniform-grid .cell {
	border: none;
	vertical-align: middle;
	text-align: center;
	position: relative;
}
</style>
