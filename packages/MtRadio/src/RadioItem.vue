<template>
	<label :class="[{'mt-radio-item':true},{button:IsButtonType},{checked:IsChecked},{disabled:IsDisabled}]">
		<span class="mt-radio-item__input">
			<span class="mt-radio-item__icon"></span>
			<input type="radio" :name="Group" @change="UpdateValue" hidden="hidden" :checked="IsChecked" />
		</span>
		<span class="mt-radio-item__label">
			{{label}}
		</span>
	</label>
</template>

<script>
export default {
	name: "MtRadioItem",
	inject: ["Root"],
	props: {
		label: String,
		value: String,
	},
	data() {
		return {
			val: "",
		};
	},
	computed: {
		Group() {
			return this.Root.GroupID;
		},
		IsChecked() {
			var pr = this.Root.value;
			return pr == this.label || pr == this.value;
		},
		IsButtonType() {
			return this.Root.type === "button";
		},
		IsDisabled() {
			return this.Root.disabled;
		},
	},
	components: {},
	methods: {
		UpdateValue() {
			this.Root.Selected(this.value || this.label);
		},
	},
	mounted() {},
};
</script>
<style scoped lang="scss">
.mt-radio-item {
	color: #606266;
	font-weight: 500;
	line-height: 1;
	position: relative;
	cursor: pointer;
	display: inline-block;
	white-space: nowrap;
	outline: none;
	font-size: 14px;
	margin: 0 3px;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	.mt-radio-item__input {
		// border: 1px solid #dcdfe6;
		// border-radius: 100%;
		// line-height: 1;
		// width: 14px;
		// height: 14px;
		// background-color: #fff;
		// position: relative;
		// cursor: pointer;
		// display: inline-block;
		// box-sizing: border-box;
		// vertical-align: middle;
		// .mt-radio-item__icon {
		// 	width: 4px;
		// 	height: 4px;
		// 	border-radius: 100%;
		// 	border-width: 2px;
		// 	border-color: white;
		// 	position: absolute;
		// 	left: 50%;
		// 	top: 50%;
		// 	transform: translate(-50%, -50%) scale(0);
		// 	transition: transform 0.15s ease-in;
		// }
		white-space: nowrap;
		cursor: pointer;
		outline: none;
		display: inline-block;
		line-height: 1;
		position: relative;
		vertical-align: middle;
		border: 1px solid #86888d;
		border-radius: 2px;
		box-sizing: border-box;
		width: 14px;
		height: 14px;
		.mt-radio-item__icon {
			box-sizing: content-box;
			border: 1px solid #409eff;
			border-left: 0;
			border-top: 0;
			height: 7px;
			left: 4px;
			position: absolute;
			top: 1px;
			transform: rotate(45deg) scaleY(0);
			width: 3px;
			transition: transform 0.15s ease-in 0.05s;
			transform-origin: center;
		}
	}
	.mt-radio-item__label {
		font-size: 14px;
		line-height: 1;
	}
	&:hover {
		cursor: pointer;
	}
	&.checked {
		color: #409eff;
		.mt-radio-item__input {
			// border-width: 7px;
			// border-color: #409eff;
			// .mt-radio-item__icon {
			// 	background-color: #fff;
			// 	transform: translate(-50%, -50%) scale(1);
			// }
			// border-width: 7px;
			border-color: #409eff;
			.mt-radio-item__icon {
				transform: rotate(45deg) scaleY(1);
			}
		}
	}
	&.button {
		margin: 0;
		.mt-radio-item__input {
			display: none;
		}
		.mt-radio-item__label {
			padding: 6px 12px;
			display: inline-block;
			background: #fff;
			border: 1px solid #dcdfe6;
		}
		&.checked {
			color: #409eff;
			.mt-radio-item__label {
				border-bottom: 1px solid #727479;
				font-weight: 600;
			}
		}
	}
	&.disabled {
		* {
			cursor: not-allowed;
		}
	}
}
</style>
