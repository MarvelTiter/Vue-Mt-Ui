<script>
export default {
	render(h) {
		return <div>{this.$slots.default}</div>;
	},
	inject: ["root"],
	name: "MtTableColumn",
	data() {
		return {
			renderCell: null,
			sortType: 0,
		};
	},
	props: {
		prop: String,
		label: String,
		width: [String, Number],
		sortable: Boolean,
		align: {
			// left/right/center
			default: "center",
			validator(value) {
				return ["left", "right", "center"].indexOf(value) !== -1;
			},
		},
		type: {
			// index/selection/extend
			validator(value) {
				return ["selection", "index", "extend"].indexOf(value) !== -1;
			},
		},
	},
	computed: {
		asc() {
			return this.sortType === 1;
		},
		desc() {
			return this.sortType === 2;
		},
	},
	components: {},
	methods: {
		sort() {
			this.root.sort(this.prop, this.sortType);
		},
		clearHandleSelectAll(){
			this.root.handleSelectAll = false;
		}
	},
	created() {
		this.renderCell = (h, row, column, $index) => {
			if (this.$scopedSlots["default"]) {
				const data = {
					row: row,
					index: $index + 1,
				};
				return this.$scopedSlots["default"](data);
			}
			// return row[column.prop];
			if (column.type === "selection") {
				return (
					<input
						type="checkbox"
						v-model={row.selected}
						onClick={this.clearHandleSelectAll}
					></input>
				);
			}
			if (column.type === "index") {
				return $index + 1;
			}
			return row[column.prop];
		};
	},
	mounted() {},
};
</script>
<style scoped lang="scss">
</style>
