<template>
	<div class="mt-label-input">
		<mt-input v-if="status" v-model="value" :placeholder="placeholder" @blur="endEdit" ref="input"></mt-input>
		<label v-else class="label" :class={holder:!value} @click="labelClick">{{ showLabel }}</label>
	</div>
</template>

<script>
import MtInput from "./../../MtInput";
export default {
	name: "MtLabelInput",
	props: {
		field: String,
		edit: { type: Boolean, default: undefined },
		placeholder: String,
	},
	model: {
		prop: "field",
		event: "valueChange",
	},
	data() {
		return {
			value: this.field,
			status: this.edit,
		};
	},
	watch: {
		value(newValue) {
			this.$emit("valueChange", newValue);
		},
		field(newValue) {
			this.value = newValue;
		},
	},
	computed: {
		canEdit() {
			return this.edit || this.edit === undefined;
		},
		showLabel() {
			if (!this.value && this.canEdit) {
				return this.placeholder;
			}
			return this.value;
		},
	},
	components: { MtInput },
	methods: {
		labelClick() {
			if (this.canEdit) {
				this.status = true;
				this.$nextTick(() => {
					var input = this.$refs["input"];
					input.$el.querySelector("input").focus();
				});
			}
		},
		endEdit() {
			if (this.canEdit) this.status = false;
		},
	},
	mounted() {},
};
</script>
<style scoped lang="scss">
.mt-label-input {
	text-align: left;
	.label {
		font-size: 14px;
		padding-left: 10px;
		display: inline-block;
		height: 35px;
		line-height: 35px;
		box-sizing: border-box;
		width: 100%;
	}
	.holder {
		color: gray;
	}
}
</style>
