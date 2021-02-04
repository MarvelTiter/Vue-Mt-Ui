<template>
	<div :class="[{'mt-checkbox-group':true},{disabled:disabled}]">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "MtCheckboxGroup",
	props: {
		value: [Array, String],
		request: {
			default: "string",
			validator(value) {
				return ["string", "array"].indexOf(value) !== -1;
			},
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			selected: [],
		};
	},
	provide() {
		return {
			Root: this,
		};
	},
	watch: {
		value() {
			this.UpdateSelected();
		},
	},
	computed: {},
	components: {},
	methods: {
		AddValue(val) {
			var index = this.selected.indexOf(val);
			if (index == -1) this.selected.push(val);
			this.Selected();
		},
		RemoveValue(val) {
			var index = this.selected.indexOf(val);
			if (index > -1) {
				this.selected.splice(index, 1);
			}
			this.Selected();
		},
		ValueExit(val) {
			return this.selected.indexOf(val) > -1;
		},
		Selected() {
			var val;
			if (this.request === "string") {
				val = this.selected.join(",");
			} else if (this.request === "array") {
				val = this.selected;
			}
			this.$emit("input", val);
			this.$emit("change", val);
		},
		UpdateSelected() {
			if (typeof this.value == "string") {
				this.selected = this.value.split(",");
			} else if (this.value == undefined) {
				this.selected = [];
			} else {
				this.selected = this.value;
			}
		},
	},
	mounted() {
		this.UpdateSelected();
	},
};
</script>
