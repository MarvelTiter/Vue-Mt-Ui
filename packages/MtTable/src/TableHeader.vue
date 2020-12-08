<template>
	<thead>
		<tr v-for="(t,index) of headRows" :key="index">
			<th v-for="(th,thIndex) of headRowData(index)" :style="{textAlign:headInfo[thIndex].align}" :key="thIndex" :colspan="th.colSpan" :rowspan="th.rowSpan">
				<div :class="[{sort:th.sortable}]">
					<label>
						<input v-if="th.type === 'selection'" type="checkbox" v-model="selectAll" ref="CheckAll" @input="handleCheckAll" />
						<span>{{th.type === 'selection'?'全选':th.label}}</span>
					</label>
					<span v-if="th.sortable" :class="[{sort_box:true},{ascending:th.asc},{descending:th.desc}]" @click.self="sort(th)">
						<i class="asc" @click="sort(th,1)"></i>
						<i class="desc" @click="sort(th,2)"></i>
					</span>
				</div>
			</th>
		</tr>
	</thead>
</template>

<script>
export default {
	inject: ["root"],
	props: ["columns", "headInfo"],
	data() {
		return {
			selectAll: false,
		};
	},
	watch: {
		sortType(newValue, oldValue) {
			if (newValue === oldValue) {
				sortType = 0;
			}
		},
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
				this.$set(th, "asc", false);
				this.$set(th, "desc", false);
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
		handleCheckAll() {
			this.root.selectChange(!this.selectAll);
		},

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
		sort(head, orderby) {
			var h = this.columns.forEach((col) => {
				if (col._uid === head._id) {
					if (!orderby) {
						col.sortType = (col.sortType + 1) % 3;
					} else col.sortType = orderby;
					this.$set(head, "asc", col.asc);
					this.$set(head, "desc", col.desc);
					col.sort();
				}
			});
		},
	},
	mounted() {},
};
</script>
<style scoped lang="scss">
.sort {
	.sort_box {
		display: inline-block;
		align-items: center;
		position: relative;
		height: 16px;
		width: 24px;
		vertical-align: middle;
		i {
			width: 0;
			height: 0;
			border: 5px solid transparent;
			position: absolute;
			left: 7px;
		}
		.asc {
			border-bottom-color: #c0c4cc;
			top: -5px;
		}
		.desc {
			border-top-color: #c0c4cc;
			bottom: -3px;
		}

		&:hover {
			cursor: pointer;
		}
	}
	.ascending {
		.asc {
			border-bottom-color: #409eff;
		}
	}
	.descending {
		.desc {
			border-top-color: #409eff;
		}
	}
}
</style>
