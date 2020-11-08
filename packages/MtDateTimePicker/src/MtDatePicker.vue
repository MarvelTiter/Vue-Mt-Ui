<template>
	<div class="mt-date-picker" :class="{ 'mt-input-group': IsPrepended }">
		<div class="mt-input__prepend" v-show="IsPrepended">
			{{ prefix }}
		</div>
		<div class="mt-date-picker-wrap" @mouseover="active = true" @mouseout="active = false">
			<input class="mt-input__inner" placeholder="选择日期" @focus="show" v-model="content" :style="style" />
			<div class="mt-date-picker-panel" :class="{ panelvisible: itemShow }">
				<div class="header">
					<div class="arrow pre" @click="preMonth"></div>
					<div>
						<span>{{ Fullyear }}</span>
						<span>年</span>
						<span>{{ Month + 1 }}</span>
						<span>月</span>
					</div>
					<div class="arrow next" @click="nextMonth"></div>
				</div>
				<table cellspacing="0" cellpadding="0">
					<tr>
						<th v-for="(day, key) of weekDays" :key="key">{{ day }}</th>
					</tr>
					<tr v-for="(days, key) of TotalDays" :key="key">
						<td v-for="(d, key) of days" :key="key" @click="handleTDClick(d)" :class="{
                forbidden: d.type == 0,
                currentmonth: d.type == 1,
                today: d.today,
              }">
							{{ d.day }}
						</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MtDatePicker",
	props: {
		width: {
			type: String,
			default: "",
		},
		label: {
			type: String,
			default: "",
		},
		format: {
			type: String,
			default: "yyyy-MM-dd",
		},
		value: {
			type: String,
			default: "",
		},
	},
	data: function () {
		return {
			globalDate: new Date(),
			weekDays: ["日", "一", "二", "三", "四", "五", "六"],
			itemShow: false,
			prefix: this.label,
			fmt: this.format,
			content: "",
			active: false,
		};
	},
	watch: {
		format: function (val) {
			this.fmt = val;
		},
		value: function (val) {
			this.content = val;
		},
		label: function (val) {
			this.prefix = val;
		},
	},
	computed: {
		IsPrepended() {
			if (this.prefix) return true;
			else return false;
		},
		style: function () {
			var s = {};
			if (this.width) {
				if (!isNaN(this.width)) this.width = this.width + "px";
				s.width = this.width;
			}
			return s;
		},
		Fullyear: function () {
			return this.globalDate.getFullYear();
		},
		Month: function () {
			return this.globalDate.getMonth();
		},
		TotalDays: function () {
			var dates = [];
			//
			var fd = new Date(this.globalDate);
			fd.setDate(1);
			var preDays = fd.getDay();
			for (var index = 0; index < preDays; index++) {
				fd.setDate(fd.getDate() - 1);
				dates.push({
					type: 0,
					day: fd.getDate(),
					today: false,
				});
			}
			dates.reverse();
			//
			var monDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][
				this.globalDate.getMonth()
			];
			if (
				this.isLeapYear(this.globalDate.getFullYear()) &&
				this.Month == 2
			)
				monDays++;
			var d = this.globalDate.getDate();
			for (var index = 1; index <= monDays; index++) {
				dates.push({
					type: 1,
					day: index,
					today: d == index,
				});
			}
			//
			var ld = new Date(this.globalDate);
			ld.setDate(monDays);
			var after = 6 - ld.getDay();
			for (var index = 0; index < after; index++) {
				dates.push({
					type: 0,
					day: index,
					today: false,
				});
			}
			var res = [];
			for (var index = 0; index < dates.length; index += 7) {
				var temp = [];
				for (var y = 0; y < 7; y++) {
					temp.push(dates[index + y]);
				}
				res.push(temp);
			}
			return res;
		},
	},
	methods: {
		handleTDClick: function (d) {
			if (d.type == 0) return;
			this.content = this.FmtDate(d);
			this.$emit("input", this.content);
			this.itemShow = false;
		},
		FmtDate: function (d) {
			var year = this.Fullyear;
			var mon = this.Month + 1;
			var day = (d && d.day) || new Date().getDate();
			return this.fmt
				.replace("yyyy", year)
				.replace("MM", this.padLeft0(mon, 2))
				.replace("dd", this.padLeft0(day, 2));
		},
		nextMonth: function () {
			var d = new Date(this.globalDate);
			d.setMonth(this.Month + 1);
			this.globalDate = d;
		},
		preMonth: function () {
			var d = new Date(this.globalDate);
			d.setMonth(this.Month - 1);
			this.globalDate = d;
		},
		isLeapYear: function (year) {
			return (
				(year % 4 === 0 && year % 100 != 0) ||
				(year % 400 == 0 && year % 3200 != 0) ||
				year % 172800 == 0
			);
		},
		close: function () {
			if (!this.active) {
				this.itemShow = false;
				window.removeEventListener("click", this.close);
			}
		},
		show: function () {
			this.itemShow = true;
			window.addEventListener("click", this.close);
		},
		padLeft0: function (num, length) {
			if ((num + "").length >= length) {
				return num;
			}
			return this.padLeft0("0" + num, length);
		},
	},
	mounted: function () {
		this.content = this.FmtDate();
	},
};
</script>

<style scope>
.mt-date-picker {
	display: inline-block;
	width: 100%;
}

.mt-date-picker-wrap {
	width: 100%;
}

.mt-date-picker-panel {
	width: 320px;
	border: 1px solid #e4e7ed;
	padding: 8px;
	position: absolute;
	box-sizing: border-box;
	color: #606266;
	line-height: 30px;
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	background-color: #fff;
	border-radius: 4px;
	transform-origin: 0 0;
	transform: scaleY(0);
	transition: all 0.2s;
	margin-top: 10px;
	z-index: 999;
}

.mt-date-picker-panel.panelvisible {
	transform: scaleY(1);
}

.mt-date-picker-panel .header {
	color: #606266;
	padding: 8px;
	/* display: flex;
  align-items: center;
  justify-content: center; */
	line-height: 40px;
	text-align: center;
}
.mt-date-picker-panel .header div {
	display: inline-block;
}

.mt-date-picker-panel table {
	font-size: 12px;
	width: 100%;
	border-collapse: collapse;
}

.mt-date-picker-panel table th {
	padding: 5px;
	border-bottom: 1px solid #ebeef5;
	color: #606266;
	font-weight: 400;
	text-align: center;
}

.mt-date-picker-panel table td {
	padding: 4px 0;
	text-align: center;
	width: 32px;
	height: 30px;
	box-sizing: border-box;
	text-align: center;
	cursor: pointer;
	position: relative;
}

.mt-date-picker-panel table td:hover {
	color: #409eff;
}

.mt-date-picker-panel table td.forbidden {
	color: #c0c4cc;
	cursor: not-allowed;
}

.mt-date-picker-panel table td.today {
	color: #409eff;
	font-weight: 700;
}

.mt-date-picker-panel .arrow {
	width: 0;
	height: 0;
	border: 10px solid;
	position: relative;
	border-color: #606266;
	vertical-align: middle;
}

.mt-date-picker-panel .arrow:hover {
	cursor: pointer;
	border-color: #409eff;
}

.mt-date-picker-panel .arrow.pre {
	margin-right: 40px;
	border-top-color: transparent;
	border-left-color: transparent;
	border-bottom-color: transparent;
}

.mt-date-picker-panel .arrow.pre::after {
	content: "";
	display: block;
	position: absolute;
	width: 0;
	height: 0;
	top: -10px;
	left: -7px;
	border: 10px solid;
	border-color: transparent #fff transparent transparent;
}

.mt-date-picker-panel .arrow.next {
	margin-left: 40px;
	border-top-color: transparent;
	border-right-color: transparent;
	border-bottom-color: transparent;
}

.mt-date-picker-panel .arrow.next::after {
	content: "";
	display: block;
	position: absolute;
	width: 0;
	height: 0;
	top: -10px;
	left: -13px;
	border: 10px solid;
	border-color: transparent transparent transparent #fff;
}

.mt-date-picker-panel .clickable:hover {
	cursor: pointer;
	color: #409eff;
}
</style>
