<template>
	<li>
		<div class="mt-tree-item" @click.stop="handleNodeClick" :class="{actived:isActived}" :style="fontSize">
			<div class="title-area" :style="paddingLeft">
				<mt-icon :name="data.icon"></mt-icon>
				<span>{{ data.title }}</span>
				<mt-icon name="arrow3" v-if="hasChild" class="arrow" :class="{rotate:visible}"></mt-icon>
			</div>
			<ul class="sub-node-list" v-show="visible" v-if="hasChild">
				<mt-tree-item v-for="(m,index) in data.children" :data="m" :level="level+1" :key="index">
				</mt-tree-item>
			</ul>
		</div>
	</li>
</template>

<script>
import MtIcon from "../../MtIcon/src/MtIcon.vue";
export default {
	name: "MtTreeItem",
	inject: ["root"],
	props: {
		data: {
			type: [Array, Object],
			required: true,
		},
		level: {
			type: Number,
			required: true,
		},
	},
	data() {
		return {
			visible: true,
			itemLevel: this.level,
			itemName: this.data.title,
			end: false,
		};
	},
	computed: {
		hasChild() {
			return this.data.children && this.data.children.length;
		},
		paddingLeft() {
			var style = {};
			var l = this.root.left;
			style["padding-left"] = (this.level - 1) * l + 10 + "px";
			return style;
		},
		fontSize() {
			var style = {};
			style["font-size"] = this.level == 1 ? "18px" : "14px";
			return style;
		},
		isActived() {
			var actived = this.root.activeItem;
			return (
				actived &&
				actived.itemLevel == this.itemLevel &&
				actived.itemName == this.itemName &&
				!(this.data.children && this.data.children.length)
			);
		},
	},
	components: {
		MtIcon,
	},
	methods: {
		handleNodeClick() {
			this.visible = !this.visible;
			if (this.hasChild) return;
			this.root.activeItem = this;
			this.root.activePath = this.data.path;
		},
		handle() {
			this.end = true;
		},
	},
	mounted() {},
};
</script>
<style scoped>
li {
	padding: 0;
}
.mt-tree-item {
	margin: 0;
	color: white;
	box-sizing: border-box;
}
.title-area span {
	margin-left: 5px;
}
.title-area {
	position: relative;
	padding: 10px 5px;
	box-sizing: border-box;
}
.title-area:hover {
	background-color: rgb(84, 92, 100);
	cursor: pointer;
}
.mt-tree-item .arrow {
	transition: all 0.2s;
	vertical-align: middle;
	display: inline-block;
	position: absolute;
	right: 10px;
	top: 50%;
	margin-top: -8px;
}

.mt-tree-item .arrow.rotate {
	transform: rotate(180deg);
}

.sub-node-list {
	padding-top: 5px;
	/* transform-origin: top;
	transform: scaleY(0);
	transition: all 0.2s; */
}
.sub-node-list.open {
	display: block;
	transform: scaleY(1);
}
.actived {
	color: #40e9ff;
	text-shadow: 0px 0px 5px rgba(160, 201, 254, 1);
	font-weight: bold;
}
</style>
