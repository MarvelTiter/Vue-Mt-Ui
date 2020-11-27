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
			<table-header></table-header>
			<table-body :data="data" :columns="columns"></table-body>
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
			columns: this.column,
			data: this.source,
		};
	},
	provide() {
		return {
			table: this,
		};
	},
	props: {
		column: [Array, Object],
		source: [Array, Object],
		stripe: Boolean,
		border: Boolean,
		ellipsis: Boolean,
	},
	watch: {
		column(newValue) {
			this.columns = newValue;
		},
		source(newValue) {
			this.data = newValue;
		},
	},
	components: {
		TableHeader,
		TableBody,
	},
	methods: {
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
		if (!this.columns) {
			this.columns = [];
			this.InitColumns();
		}
	},
};
</script>

<style>
</style>
