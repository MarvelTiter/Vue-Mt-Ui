<template>
	<label :class="[{'mt-checkbox':true},{checked:IsChecked},{disabled:IsDisabled}]" @click="handleClick">
		<span class="mt-checkbox__input">
			<span class="mt-checkbox__icon"></span>
			<input type="checkbox" @change="HandleChange" hidden="hidden" :checked="IsChecked" />
		</span>
		<span class="mt-checkbox__label">
			{{label}}
		</span>
	</label>
</template>

<script>
export default {
	name: "MtCheckbox",
	data() {
		return {
			state: false,
		};
	},
	props: {
		value: [String, Number, Boolean],
		label: String,
		checkValue: [Array, String],
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	watch: {
		value(newVal) {
			this.$nextTick(() => {
				this.state = this.IsChecked;
			});
		},
	},
	computed: {
		val() {
			if (this.checkValue) {
				if (this.state) return this.checkValue[0];
				else return this.checkValue[1];
			} else {
				if (this.state) return this.label;
				else return "";
			}
		},
		TrueLabel() {
			if (this.checkValue) {
				return this.checkValue[0];
			}
			return this.label;
		},
		Root() {
			var parent = this.$parent;
			if (parent.$options.name == "MtCheckboxGroup") {
				return parent;
			}
			return null;
		},
		IsChecked() {
			if (this.Root) {
				return this.Root.ValueExit(this.TrueLabel);
			} else {
				if (this.checkValue) {
					this.state = this.checkValue[0] == this.value;
				} else {
					var v;
					if (typeof this.value === "string") v = this.value.trim();
					else v = this.value;
					this.state = v;
					console.log(this.value);
				}
				return this.state;
			}
		},
		IsDisabled() {
			if (this.Root) {
				return this.Root.disabled;
			}
			return this.disabled;
		},
	},
	components: {},
	methods: {
		HandleChange() {
			this.state = !this.state;
			if (this.Root) {
				// group
				if (this.state) this.Root.AddValue(this.TrueLabel);
				else this.Root.RemoveValue(this.TrueLabel);
			} else {
				var val;
				if (!this.checkValue) {
					val = this.state;
				} else {
					val = this.state ? this.checkValue[0] : this.checkValue[1];
				}
				this.$emit("input", val);
				this.$emit("change", val);
			}
		},
		handleClick(e) {
			if (this.IsDisabled) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			}
		},
		UpdateView() {},
	},
	mounted() {
		this.$nextTick(() => {
			this.state = this.IsChecked;
		});
	},
};
</script>
<style scoped lang="scss">
.mt-checkbox {
	color: #606266;
	font-weight: 500;
	font-size: 14px;
	position: relative;
	display: inline-block;
	white-space: nowrap;
	user-select: none;
	margin: 0 5px;
	&:hover {
		cursor: pointer;
	}
	.mt-checkbox__input {
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
		.mt-checkbox__icon {
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
	.mt-checkbox__label {
		line-height: 1;
		display: inline-block;
		padding-left: 5px;
		font-size: 14px;
		vertical-align: middle;
	}
	&.checked {
		.mt-checkbox__label {
			color: #409eff;
		}
		.mt-checkbox__input {
			// border-width: 7px;
			border-color: #409eff;
			.mt-checkbox__icon {
				transform: rotate(45deg) scaleY(1);
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
