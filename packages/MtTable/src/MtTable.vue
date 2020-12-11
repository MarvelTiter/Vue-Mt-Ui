<template>
	<div class="mt-table">
		<div style="display:none;">
			<slot></slot>
		</div>
		<table :class="[
		{stripe:stripe},
		{border:border},
		{ellipsis:ellipsis},
		{hover:true}
		]">
			<colgroup>
				<col v-for="(col,index) in colWidth" :width="col" :key="index">
			</colgroup>
			<table-header :columns="columns" :head-info="headers"></table-header>
			<tbody v-if="this.data.length === 0">
				<tr>
					<td :colspan="this.columns.length" class="empty">{{emptyText}}</td>
				</tr>
			</tbody>
			<table-body v-else :data="data" :columns="columns"></table-body>
		</table>
	</div>
</template>
<script>
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
export default {
	name: "MtTable",
	data() {
		return {
			headers: [],
			columns: this.column || [],
			data: this.source,
			bakData: null,
			colWidth: [],
			handleSelectAll: false,
		};
	},
	provide() {
		return {
			root: this,
		};
	},
	props: {
		column: [Array, Object],
		source: [Array, Object],
		showTitle: Boolean,
		emptyText: {
			type: String,
			default: "暂无数据",
		},
		stripe: {
			type: Boolean,
			default: true,
		},
		border: {
			type: Boolean,
			default: true,
		},
		ellipsis: {
			type: Boolean,
			default: true,
		},
	},
	watch: {
		column(newValue) {
			this.columns = newValue;
		},
		source(newValue) {
			this.data = newValue;
			this.ChangeState(false);
		},
	},
	components: {
		TableHeader,
		TableBody,
	},
	methods: {
		sort(prop, type) {
			if (this.bakData == null) this.bakData = this.data.slice();
			if (type === 0) {
				this.data = this.bakData.slice();
			} else
				this.data.sort(function (a, b) {
					if (type == 1) {
						return b[prop] - a[prop];
					} else if (type == 2) {
						return a[prop] - b[prop];
					}
				});
		},
		selectChange(checkAll) {
			if (typeof checkAll !== "undefined") {
				this.handleSelectAll = true;
				this.ChangeState(checkAll);
			}
			var selected = this.data.filter((row) => {
				return row.selected;
			});
			this.$emit("select-change", selected);
		},
		ChangeState(state) {
			this.data.forEach((d) => {
				this.$set(d, "selected", state);
			});
		},
		_resolveColumns(head, list, parentId, layer) {
			list.forEach((col) => {
				let temp = col;
				// console.log(temp._props.label, temp);
				if (temp.$options.name === "MtTableColumn") {
					const children = Object.assign({}, temp._props, {
						_id: temp._uid,
						_parentId: parentId,
						_layer: layer,
					});
					if (temp.$children.length > 0) {
						layer++;
						if (temp.type !== "extend") {
							head.push(
								Object.assign(children, { _hasChildren: true })
							);
						}
						this._resolveColumns(
							head,
							temp.$children,
							temp._uid,
							layer
						);
						layer--;
					} else {
						if (temp.type !== "extend") {
							head.push(children);
							this.colWidth.push(temp.width);
						}
						this.columns.push(temp);
					}
				}
			});
		},
		InitColumns() {
			this.$nextTick(() => {
				var cols = this.$children;
				this._resolveColumns(this.headers, cols, 0, 0);
			});
		},
	},
	mounted() {
		if (this.columns.length === 0) {
			this.InitColumns();
		}
		this.ChangeState(false);
	},
};
</script>

<style>
</style>
