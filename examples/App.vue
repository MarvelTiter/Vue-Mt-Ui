<template>
	<div id="app" v-mt-loading="loading">
		<button @click="handleClick">
			Toggle render
		</button>
		<mt-table :source="data" stripe border>
			<!-- <MtTableColumn label="选择" type="selection"></MtTableColumn> -->
			<MtTableColumn prop="name" label="姓名">
			</MtTableColumn>
			<MtTableColumn prop="age" label="年龄"></MtTableColumn>
			<MtTableColumn prop="address" label="地址"></MtTableColumn>
		</mt-table>
		<mt-select :data="HPZLList" v-model="HPZL"></mt-select>
		<mt-select :data="JYJGList" v-model="JYJG"></mt-select>
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
		age: 32,
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
			HPZL:'#',
			JYJGList: TestData.JYJGList,
			JYJG:'#',
		};
	},
	components: { MtButton },
	methods: {
		nav(p) {
			console.log(p);
		},
		handleClick() {
			this.data = data;
		},
		show(d) {
			console.log(d);
			return "1";
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
