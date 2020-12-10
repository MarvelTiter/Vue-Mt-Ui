<template>
	<div id="app" v-mt-loading="loading">
		<mt-button @click="handleClick" accept-key="a">测试</mt-button>

		<mt-table :source="data" @select-change="selectHandle">
			<MtTableColumn type="selection" width="80"></MtTableColumn>
			<MtTableColumn prop="name" label="姓名"></MtTableColumn>
			<MtTableColumn prop="age" label="年龄" sortable></MtTableColumn>
			<MtTableColumn prop="address" label="地址" sortable></MtTableColumn>
		</mt-table>
		<mt-uniform-grid :column="6">
			<mt-uniform-grid :column="4" :colspan="5">
				<mt-date-picker label="开始日期" format="yyyy-MM-dd" v-model="date"></mt-date-picker>
				<mt-date-picker label="结束日期" format="yyyy-MM-dd"></mt-date-picker>
				<mt-select label="号牌种类" v-model="HPZL" :data="HPZLList" filtable></mt-select>
				<mt-select label="机构名称"></mt-select>
				<mt-input label="I P 地 址"></mt-input>
				<mt-input label="操作人员" v-model="CZY"></mt-input>
				<mt-input label="事件标志"></mt-input>
				<mt-input label="事件描述"></mt-input>
			</mt-uniform-grid>
			<mt-uniform-grid :column="1">
				<mt-button type="primary">查询(Enter)</mt-button>
			</mt-uniform-grid>
		</mt-uniform-grid>
		<!-- <mt-select label="号牌种类" v-model="HPZL" :data="HPZLList"></mt-select> -->
	</div>
</template>
<script>
const columns = [
	{
		dataIndex: "name",
		key: "name",
		slots: {
			title: "customTitle",
			customRender: "name",
		},
	},
	{
		title: "Age",
		dataIndex: "age",
		key: "age",
	},
	{
		title: "Address",
		dataIndex: "address",
		key: "address",
	},
	{
		title: "Tags",
		key: "tags",
		dataIndex: "tags",
		scopedSlots: {
			customRender: "tags",
		},
	},
	{
		title: "Action",
		key: "action",
		scopedSlots: {
			customRender: "action",
		},
	},
];
const data = [
	{
		key: "1",
		name: "John Brown",
		age: 32,
		address: "New York No. 1 Lake Park",
		tags: ["nice", "developer"],
	},
	{
		key: "2",
		name: "Jim Green",
		age: 42,
		address: "London No. 1 Lake Park",
		tags: ["loser"],
	},
	{
		key: "3",
		name: "Joe Black",
		age: 22,
		address:
			"Sidney No. 1 Lake Park Sidney No. 1 Lake Park Sidney No. 1 Lake Park",
		tags: ["cool", "teacher"],
	},
	{
		key: "4",
		name: "Joe Black2",
		age: 12,
		address:
			"Sidney No. 1 Lake Park Sidney No. 1 Lake Park Sidney No. 1 Lake Park",
		tags: ["cool", "teacher"],
	},
];
import "./../packages/assets/_table.scss";
import MtButton from "./../packages/MtButton";
import TestData from "./data";
export default {
	data() {
		return {
			visible: false,
			loading: false,
			HPZLList: TestData.HPZLList,
			HPZL: "#",
			JYJGList: TestData.JYJGList,
			JYJG: "#",
			data: [],
			CZY: "",
			date: "2020-9-1",
		};
	},
	watch: {
		HPZL(v) {},
	},
	components: { MtButton },
	methods: {
		nav(p) {},
		handleClick() {
			this.data = data;
			this.HPZL = "01";
			this.JYJG = "4400000254";
		},
		show(d) {
			return "1";
		},
		selectHandle(rows) {
			console.log(rows);
		},
	},
};
</script>
<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
