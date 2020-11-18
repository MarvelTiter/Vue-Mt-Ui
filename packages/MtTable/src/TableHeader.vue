<template>
	<thead>
		<tr v-for="(t,index) of headRows" :key="index" class="mt-table__table__th_tr">
			<th class="mt-table__table__th" v-for="(th,thIndex) of headRowData(index)" :style="{textAlign:headInfo[thIndex].align}" :key="thIndex" :colspan="th.colSpan" :rowspan="th.rowSpan">
				{{th.label}}
			</th>
		</tr>
	</thead>
</template>

<script>
export default {
	// props: {
	// 	headInfo: [Array, Object],
	// },
	inject: ["table"],
	data() {
		return {
			headInfo: this.table.headers,
		};
	},
	computed: {
		headRows() {
			let layerMax = 0;
			for (const h of this.headInfo) {
				if (h._layer > layerMax) layerMax = h._layer;
			}
			return layerMax + 1;
		},
		ResolvedHeadInfo() {
			let newData = [];
			this.headInfo.forEach((th) => {
				if (!th._hasChildren) {
					let rowSpan = this.headRows - th._layer;
					th.rowSpan = rowSpan <= 1 ? null : rowSpan;
				} else {
					let colSpan = this.getChildren(th._id);
					th.colSpan = colSpan <= 1 ? null : colSpan;
				}
				newData.push(th);
			});
			return newData;
		},
		Row1() {
			return this.ResolvedHeadInfo.filter((h) => {
				return h._layer == 0;
			});
		},
	},
	components: {},
	methods: {
		headRowData(rowIndex) {
			var rowData = this.ResolvedHeadInfo.filter((h) => {
				return h._layer == rowIndex;
			});
			return rowData;
		},
		getChildren(parentId, count) {
			if (!count) count = 0;
			this.headInfo.forEach((h) => {
				if (h._parentId == parentId) {
					if (h._hasChildren) {
						count = this.getChildren(h._id, count);
					} else {
						count++;
					}
				}
			});
			return count;
		},
	},
	mounted() {},
};
</script>
<style scoped lang="scss">
th {
	border: 1px solid black;
}
</style>
