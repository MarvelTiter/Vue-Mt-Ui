<template>
	<div class="mt-tree">
		<ul v-for="(m,key) in nodeList" :key="key">
			<mt-tree-item :data="m" :level="1" :checkbox="checkbox" :label="label" :value="value"></mt-tree-item>
		</ul>
	</div>
</template>
<script>
import MtTreeItem from "./MtTreeItem.vue";
export default {
	name: "MtTree",
	provide() {
		return {
			root: this,
		};
	},
	props: {
		label: String,
		value: String,
		checkbox: Boolean,
		nodes: {
			type: [Array, Object],
			required: true,
		},
		leftSpace: {
			type: Number,
			default: 10,
		},
	},
	data() {
		return {
			nodeList: this.nodes,
			selected: [],
			left: this.leftSpace,
		};
	},
	watch: {
		activePath() {
			this.$emit("actived-change", this.activePath);
		},
		nodes(newValue) {
			this.nodeList = newValue;
		},
		selected(list) {
			this.$emit("select-node", list);
		},
	},
	computed: {},
	components: {
		MtTreeItem,
	},
	methods: {
		addNodes(item) {
			var index = this.selected.indexOf(item);
			if (index == -1) this.selected.push(item);
		},
		removeNodes(item) {
			var index = this.selected.indexOf(item);
			if (index > -1) {
				this.selected.splice(index, 1);
			}
		},
	},
	mounted() {},
};
</script>
<style scoped>
.mt-tree {
	text-align: left;
}
.mt-tree ul {
	height: 100%;
	transition: all 0.2s;
}
.mt-tree ul li {
	box-sizing: border-box;
}
</style>
