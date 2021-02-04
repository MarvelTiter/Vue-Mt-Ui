<template>
	<div :class="[{'mt-radio':true},{disabled:disabled}]" @click="handleClick">
		<label class="title">{{title}}</label>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "MtRadio",
	props: {
		orientation: {
			default: "Horizontal",
			validator(value) {
				return ["Horizontal", "Vertical"].indexOf(value) !== -1;
			},
		},
		type: {
			default: "default",
			validator(value) {
				return ["button", "default"].indexOf(value) !== -1;
			},
		},
		value: String,
		disabled: {
			type: Boolean,
			default: false,
		},
		title: String,
	},
	data() {
		return {
			GroupID: Math.random(),
		};
	},
	provide() {
		return {
			Root: this,
		};
	},
	computed: {},
	components: {},
	methods: {
		Selected(val) {
			this.$emit("input", val);
			this.$emit("change", val);
		},
		handleClick(e) {
			if (this.disabled) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			}
		},
	},
	mounted() {},
};
</script>
<style scoped lang="scss">
.mt-radio {
	.title {
		margin-right: 5px;
	}
	&.disabled {
		* {
			cursor: not-allow;
		}
	}
}
</style>
