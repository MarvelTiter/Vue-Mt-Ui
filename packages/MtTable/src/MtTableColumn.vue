<script>
export default {
	render(h) {
		return <div>{this.$slots.default}</div>;
	},
	name: "MtTableColumn",
	data() {
		return {
			renderCell: null,
		};
	},
	props: {
		prop: String,
		label: String,
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
	computed: {},
	components: {},
	methods: {},
	created() {
		this.renderCell = (row, column, $index) => {
			if (this.$scopedSlots["default"]) {
				const data = {
					row: row,
					index: $index + 1,
				};
				return this.$scopedSlots["default"](data);
			}
			// return row[column.prop];
			if (column.type === "selection") {
				return <input type="checkbox"></input>
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
