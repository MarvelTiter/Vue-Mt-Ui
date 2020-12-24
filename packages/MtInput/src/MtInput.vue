<template>
	<div class="mt-input mt-input-group">
		<label v-if="HasLabel">{{ label }}</label>
		<div class="mt-input__prepend" v-if="IsPrepended">
			<slot name="preSlot">{{ prefix }}</slot>
		</div>
		<div style="position:relative;">
			<span class="mt-input__prefix" :class="{preicon:preIcon,suficon:sufIcon}">
				<mt-icon :name="icon"></mt-icon>
			</span>
			<input :class="{'mt-input__inner':true,prepended:IsPrepended,preicon:preIcon,suficon:sufIcon}" :style="style" :type="type" :placeholder="holder" v-model="content" @input="valueChanged" @keyup="handleKeyup" @focus="handleFocus" @blur="handleBlur" :disabled="disabled" autocomplete="off" :readonly="readonly" />
			<slot></slot>
		</div>
	</div>
</template>

<script>
import MtIcon from "./../../MtIcon";
export default {
	name: "MtInput",
	props: {
		label: String,
		prefix: String,
		disabled: Boolean,
		readonly: Boolean,
		preIcon: String,
		sufIcon: String,
		type: String,
		placeholder: {
			type: String,
			default: "",
		},
		width: {
			type: String,
			default: "",
		},
		value: {
			type: String,
			default: "",
		},
	},
	data: function () {
		return {
			holder: this.placeholder,
			content: this.value,
			pre: this.prefix,
		};
	},
	watch: {
		value: function (val) {
			if (this.pre) this.content = val.replace(this.pre, "");
			else this.content = val;
		},
	},
	components: { MtIcon },
	computed: {
		style: function () {
			var s = {};
			if (this.width) {
				if (!isNaN(this.width)) this.width = this.width + "px";
				s.width = this.width;
			}
			return s;
		},
		IsPrepended() {
			if (this.prefix) return true;
			else return false;
		},
		HasLabel() {
			if (this.label) return true;
			else return false;
		},
		icon() {
			if (this.preIcon) return this.preIcon;
			else return this.sufIcon;
		},
	},
	methods: {
		valueChanged: function () {
			if (this.pre) this.$emit("input", this.pre + this.content);
			else this.$emit("input", this.content);
		},
		handleFocus(e) {
			this.$emit("focus", e);
		},
		handleKeyup(e) {
			this.$emit("keyup", e);
		},
		handleBlur(e) {
			this.$emit("blur", e);
		},
	},
	mounted() {
		if (this.$slots.preSlot) this.pre = this.$slots.preSlot[0].text.trim();
	},
};
</script>

<style scope lang="scss">
.mt-input {
	width: 100%;
	position: relative;
	font-size: 14px;
	label {
		display: table-cell;
		width: 1px;
		white-space: nowrap;
		padding: 0 10px 0 20px;
	}
	.mt-input__prefix {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		color: #c0c4cc;
		width: 25px;
		text-align: center;
		&.preicon {
			left: 5px;
		}
		&.suficon {
			right: 5px;
		}
	}
}
.mt-input-group {
	display: inline-table !important;
	border-collapse: separate;
	border-spacing: 0;
	text-align: left;
	.mt-input__prepend {
		background-color: #f5f7fa;
		color: #909399;
		vertical-align: middle;
		display: table-cell;
		position: relative;
		border: 1px solid #dcdfe6;
		border-radius: 4px;
		padding: 0 10px;
		width: 1px;
		white-space: nowrap;
		border-right: 0;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
	.mt-input__inner {
		padding: 0 10px;
		height: 35px;
		line-height: 35px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		border: 1px solid #dcdfe6;
		font-size: inherit;
		border-radius: 4px;
		width: 100%;
		box-sizing: border-box;
		&.prepended {
			vertical-align: middle;
			display: table-cell;
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
		&.preicon {
			padding-left: 30px;
		}
		&.sufIcon {
			padding-right: 30px;
		}
		&:focus {
			border: 1px solid #409eff;
			outline: 0;
		}
		&:disabled {
			background-color: #f5f7fa;
			&:hover {
				cursor: not-allowed;
			}
		}
	}
}
</style>
