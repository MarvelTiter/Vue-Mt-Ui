<template>
	<div class="mt-pagination-wrap">
		<ul class="flex">
			<li>总数：{{ totalCount }}</li>
			<li>{{ padLeft(current) }} / {{ TotalPage }}</li>
			<li class="btn" @click="current = 1">首页</li>
			<li class="btn" @click="current--">上一页</li>
			<li class="btn" @click="current++">下一页</li>
			<li class="btn" @click="current = TotalPage">尾页</li>
			<li><input placeholder="页数" v-model="skipIndex" /></li>
			<li class="btn" @click="current = skipIndex">跳转</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: "MtPagination",
	props: {
		pageIndex: {
			type: Number,
			default: 1,
		},
		pageSize: {
			type: Number,
			default: 20,
		},
		total: {
			type: Number,
			required: true,
		},
	},
	data: function () {
		return {
			current: this.pageIndex,
			totalCount: this.total,
			size: this.pageSize,
			skipIndex: null,
		};
	},
	watch: {
		current: function (val) {
			if (val < 1) this.current = 1;
			else if (val > this.TotalPage) this.current = this.TotalPage;
			this.$emit("index-change", this.current);
		},
		total: function (val) {
			this.totalCount = val;
		},
		pageIndex(val) {
			this.current = val;
		},
	},
	computed: {
		TotalPage: function () {
			return Math.ceil(this.totalCount / this.size);
		},
		padLeft: function () {
			return function (val) {
				var len = (this.TotalPage + "").length;
				return this.padLeft0(val, len);
			};
		},
	},
	methods: {
		padLeft0: function (num, length) {
			if ((num + "").length >= length) {
				return num;
			}
			return this.padLeft("0" + num, length);
		},
	},
};
</script>

<style scope>
/* pagination css */
.mt-pagination-wrap {
	display: inline-block;
	padding: 5px 10px;
	vertical-align: middle;
}
.mt-pagination-wrap .flex {
	display: flex;
	flex-direction: row;
	list-style: none;
	align-items: center;
	margin: 0;
	padding: 0;
	line-height: 30px;
}

.mt-pagination-wrap .flex li {
	float: left;
	margin: 0 5px;
	color: #606266;
	font-size: 14px;
}

.mt-pagination-wrap .flex li.btn {
	border-radius: 2px;
}

.mt-pagination-wrap .flex li.btn:hover {
	color: rgb(41, 136, 224);
	cursor: pointer;
}

.mt-pagination-wrap .flex li input {
	width: 60px;
	padding: 5px;
	box-sizing: border-box;
	border: 1px solid #dcdfe6;
}
</style>
