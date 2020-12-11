<template>
	<div class="mt-select">
		<div class="input-wrap" @mouseover="active = true" @mouseout="active = false">
			<!-- <input class="mt-input__inner" placeholder="请选择" @keyup="search" v-model="currentText" @focus="show" :style="style" :disabled="disabled" /> -->
			<mt-input placeholder="请选择" @keyup="search" v-model="currentText" :label="label" @focus="show" :width="width" :disabled="disabled" :readonly="!filtable" suf-icon="arrow3">
				<ul class="optionWrap" :class="{ panelvisible: itemShow }">
					<li class="optionItem" @click="handleOptionClick(s)" v-for="(s, key) of searchList" :key="key">
						{{ s[displayMember] }}
					</li>
				</ul>
			</mt-input>
		</div>
	</div>
</template>

<script>
import MtInput from "./../../MtInput";
export default {
	name: "MtSelect",
	props: {
		label: String,
		data: {
			type: Array,
			default: function(){
				return [];
			},
		},
		optionLabel: {
			type: String,
			default: "text",
		},
		optionValue: {
			type: String,
			default: "value",
		},
		value: {
			type: String,
			default: "",
		},
		filtable: Boolean,
		width: String,
		disabled: Boolean,
	},
	components: {
		MtInput,
	},
	data: function () {
		return {
			prefix: this.label,
			itemShow: false,
			valueMember: this.optionValue,
			displayMember: this.optionLabel,
			currentText: "",
			searchList: this.data,
			list: this.data,
			active: false,
		};
	},
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
	},
	watch: {
		value: function (v) {
			this.updateLabel(v);
		},
		data: function (e) {
			this.searchList = e;
			this.list = e;
			this.updateLabel();
		},
		label: function (val) {
			this.Label = val;
		},
	},
	methods: {
		updateLabel(v) {
			var val = v || this.value;
			for (var i = 0; i < this.list.length; i++) {
				var e = this.list[i];
				if (e[this.valueMember] == val) {
					this.currentText = e[this.displayMember];
					return;
				}
			}
		},
		search: function (e) {
			if (!this.filtable) return;
			var keyword = e.target.value;
			this.currentText = keyword;
			this.searchList = this.list.filter((item) => {
				return item[this.displayMember].indexOf(keyword) != -1;
			});
			this.$emit("input", this.currentText);
		},
		handleOptionClick: function (val) {
			var value = val[this.valueMember];
			this.$emit("input", value);
			this.$emit("change", val);
			this.itemShow = false;
		},
		close: function (e) {
			if (!this.active) {
				this.itemShow = false;
				window.removeEventListener("click", this.close);
			}
		},
		show: function () {
			this.itemShow = true;
			this.searchList = this.list;
			window.addEventListener("click", this.close);
		},
	},
	mounted: function () {
		this.updateLabel();
	},
};
</script>

<style scope lang="scss">
.mt-select {
	display: inline-block;
	width: 100%;
}

.mt-select .input-wrap {
	box-sizing: border-box;
}

.mt-select .optionWrap {
	display: flex;
	flex-direction: column;
	position: absolute;
	box-sizing: border-box;
	border: 1px solid #dcdfe6;
	margin-top: 10px;
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	max-height: 300px;
	overflow-y: auto;
	background-color: #fff;
	transform-origin: 0 0;
	transform: scaleY(0);
	opacity: 0;
	transition: all 0.2s;
	min-width: 150px;
	z-index: 9999;
}

.mt-select .optionWrap.panelvisible {
	transform: scaleY(1);
	opacity: 1;
}

.mt-select .optionWrap .optionItem {
	width: 100%;
	box-sizing: border-box;
	color: #606266;
	padding: 0 15px;
	height: 35px;
	line-height: 35px;
	text-align: left;
	white-space: nowrap;
}

.mt-select .optionWrap .optionItem:hover {
	background-color: #f5f7fa;
	color: #606266;
	cursor: pointer;
}
</style>
