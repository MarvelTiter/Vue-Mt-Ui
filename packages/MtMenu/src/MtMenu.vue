<template>
	<div class="mt-menu">
		<ul v-for="(m,key) in menulist" :key="key">
			<mt-menu-item :data="m" :level="1"></mt-menu-item>
		</ul>
	</div>
</template>
<script>
import MtMenuItem from "./MtMenuItem.vue";
export default {
	name: "MtMenu",
	provide() {
		return {
			rootMenu: this,
		};
	},
	props: {
		menu: {
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
			menulist: this.menu,
			activeItem: {},
			activePath: "",
			left: this.leftSpace,
		};
	},
	watch: {
		activePath() {
			this.$emit("menu-nav", this.activePath);
		},
		menu(newValue) {
			this.menulist = newValue;
		},
	},
	computed: {},
	components: {
		MtMenuItem,
	},
	methods: {},
	mounted() {},
};
</script>
<style scoped>
.mt-menu {
	text-align: left;
}
.mt-menu ul {
	height: 100%;
	transition: all 0.2s;
}
.mt-menu ul li {
	box-sizing: border-box;
}
</style>
