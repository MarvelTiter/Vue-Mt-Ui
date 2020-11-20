<template>
	<div class="mt-select">
		<div class="input-wrap" @mouseover="active = true" @mouseout="active = false">
			<!-- <input class="mt-input__inner" placeholder="请选择" @keyup="search" v-model="currentText" @focus="show" :style="style" :disabled="disabled" /> -->
			<mt-input placeholder="请选择" @keyup="search" v-model="currentText" :label="label" @focus="show" :width="width" :disabled="disabled">
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
			required: true,
		},
		display: {
			type: String,
			required: true,
		},
		value: {
			type: String,
			required: true,
		},
		selectedValue: {
			type: String,
			default: "",
		},
		width: String,
		disabled:Boolean,
	},
	components: {
		MtInput,
	},
	data: function () {
		return {
			prefix: this.label,
			itemShow: false,
			valueMember: this.value,
			displayMember: this.display,
			currentText: "",
			selValue: this.selectedValue,
			searchList: this.data,
			list: this.data,
			active: false,
		};
	},
	model: {
		prop: "selectedValue",
		event: "click",
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
		comDis: function () {
			var self = this;
			return function (v) {
				for (var i = 0; i < self.list.length; i++) {
					var e = self.list[i];
					if (e[self.valueMember] == v) return e[self.displayMember];
				}
			};
		},
		IsPrepended() {
			if (this.prefix) return true;
			else return false;
		},
	},
	watch: {
		selectedValue: function (v) {
			this.selValue = v;
			this.currentText = this.comDis(this.selValue);
		},
		data: function (e) {
			this.searchList = e;
			this.list = e;
			this.currentText = this.comDis(this.selValue);
		},
		label: function (val) {
			this.Label = val;
		},
	},
	methods: {
		search: function (e) {
			var self = this;
			this.searchList = this.list.filter(function (item) {
				return item[self.displayMember].indexOf(e.target.value) != -1;
			});
			this.$emit("click", this.currentText);
		},
		handleOptionClick: function (val) {
			this.currentText = val[this.displayMember];
			this.selValue = val[this.valueMember];
			this.$emit("click", this.selValue);
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
			window.addEventListener("click", this.close);
		},
	},
	mounted: function () {
		this.currentText = this.comDis(this.selValue);
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
