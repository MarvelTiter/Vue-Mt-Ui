<template>
	<div id="app" v-mt-loading="loading">
		<button @click="handleClick">
			Toggle render
		</button>
		<Table :data="data">
			<TableColumn label="选择" type="selection"></TableColumn>
			<TableColumn prop="name" label="姓名"></TableColumn>
			<TableColumn prop="age" label="年龄"></TableColumn>
			<TableColumn prop="address" label="地址"></TableColumn>
		</Table>
	</div>
</template>
<script>
const columns = [
	{
		dataIndex: "name",
		key: "name",
		slots: {
			title: "customTitle",
		},
		scopedSlots: {
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
		address: "Sidney No. 1 Lake Park",
		tags: ["cool", "teacher"],
	},
];
import "./../packages/assets/_table.scss";
import { Table, TableColumn } from "./../packages/table";
export default {
	data() {
		return {
			visible: false,
			loading: false,
			queryObject: {
				JYZL: "jy",
			},
			data: data,
			responseObject: {},
			menu: [
				{
					icon: "",
					path: "",
					title: "哈师大是1",
					children: [
						{
							icon: "",
							path: "",
							title: "哈师大是2",
							children: [
								{
									icon: "",
									path: "",
									title: "哈师大是3",
								},
								{
									icon: "",
									path: "",
									title: "哈师大是3",
								},
								{
									icon: "",
									path: "",
									title: "哈师大是3",
								},
								{
									icon: "",
									path: "",
									title: "哈师大是3",
								},
								{
									icon: "",
									path: "",
									title: "哈师大是3",
								},
							],
						},
					],
				},
				{
					icon: "",
					path: "",
					title: "哈师大是3",
				},
				{
					icon: "",
					path: "",
					title: "哈师大是3",
				},
				{
					icon: "",
					path: "",
					title: "哈师大是3",
				},
			],
		};
	},
	components: { Table, TableColumn },
	methods: {
		nav(p) {
			console.log(p);
		},
		handleClick() {},
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
