<template>
	<div class="mt-tree">
		<ul v-for="(m,key) in nodeList" :key="key">
			<mt-tree-item :data="m" :level="1"></mt-tree-item>
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
			activeItem: {},
			activePath: "",
			left: this.leftSpace,
		};
	},
	watch: {
		activePath() {
			this.$emit("tree-nav", this.activePath);
		},
		nodes(newValue) {
			this.nodeList = newValue;
		},
	},
	computed: {},
	components: {
		MtTreeItem,
	},
	methods: {},
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
