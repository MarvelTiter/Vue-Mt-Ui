<template>
	<tbody>
		<template v-for="(row,rowIndex) of data">
			<tr :key="rowIndex" class="mt-table__table_td_tr">
				<TableTd v-for="(col,colIndex) of columns" :column="col" :row-index="rowIndex" :column-index="colIndex" :key="colIndex" :row-data="row">

				</TableTd>
			</tr>
		</template>

	</tbody>
</template>

<script>
import TableTd from "./TableTd";
export default {
	name: "TableBody",
	props: ["columns",'data'],
	data() {
		return {
			columns: [],
			data: [],
		};
	},
	computed: {},
	components: { TableTd },
	methods: {},
	mounted() {
	},
};
</script>
<style scoped lang="scss">
</style>
