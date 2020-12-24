<template>
	<div id="app" v-mt-loading="loading">

		<!-- <mt-upload multiple auto-upload :action="'https://localhost:5001/api/pic'" @on-success="uploadSuccess" :limit="2" @on-remove="removeFile" :before-upload="beforeUpload">
			<template v-slot:tip>
				<span>只能上传jpg/png/gif文件(请依次上传两张)</span>
			</template>
		</mt-upload> -->

		<!-- <mt-image-preview :visible.sync="visible" :image-list="data" :active-index="0">
			<mt-button @click="handleClick">预览</mt-button>
		</mt-image-preview> -->
		<!-- <mt-tree :nodes="Power" @select-node="selectHandle" checkbox label="Power.QXMC" value="Power.QXBH"></mt-tree> -->
		<!-- <mt-uniform-grid :column="6">
			<mt-uniform-grid :column="3" :colspan="5">
				<mt-input></mt-input>
				<mt-input></mt-input>
				<mt-input></mt-input>
			</mt-uniform-grid>
			<mt-input></mt-input>
		</mt-uniform-grid> -->
		<mt-label-input v-model="date"></mt-label-input>
		<label>
			<input type="radio" name="g1" />
		</label>
		<input type="radio" name="g1" />
		<input type="radio" name="g1" />

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
			Menu: TestData.MenuList,
			Power: TestData.PowerList,
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
			this.visible = true;
			setTimeout(() => {
				this.data = [
					require("@/assets/1.gif"),
					require("@/assets/2.jpg"),
					require("@/assets/3.gif"),
					require("@/assets/4.png"),
					require("@/assets/5.gif"),
				];
			}, 1000);
		},
		show(d) {
			return "1";
		},
		selectHandle(rows) {
			console.log(rows);
		},
		uploadSuccess(res) {
			console.log(res);
		},
		removeFile(file, fileList) {
			console.log("file", file);
			console.log("file-list", fileList);
		},
		beforeUpload() {
			return false;
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
	/* background-color: #2c3e50; */
	min-height: 500px;
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
