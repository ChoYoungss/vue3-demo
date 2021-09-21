<template>
	<el-row class="pt-15 pb-15">
		<el-col :span="12">
			<el-button type="primary" icon="el-icon-edit">Add</el-button>
			<el-button type="success" icon="el-icon-download">Export</el-button>
		</el-col>
		<el-col :span="12" class="flex-ec">
			<el-input
				placeholder="请输入内容"
				v-model="searchVal"
				class="input-with-search"
			>
				<template #append>
					<el-button icon="el-icon-search"></el-button>
				</template>
			</el-input>
		</el-col>
	</el-row>
	<el-table
		:data="tableData"
		border
		style="width: 100%"
		header-cell-style="background-color:#f6f6f6;"
	>
		<el-table-column prop="date" align="center" label="日期" min-width="150">
		</el-table-column>
		<el-table-column prop="name" align="center" label="姓名" min-width="120">
		</el-table-column>
		<el-table-column
			prop="province"
			align="center"
			label="省份"
			min-width="120"
		>
		</el-table-column>
		<el-table-column prop="city" align="center" label="市区" min-width="120">
		</el-table-column>
		<el-table-column
			prop="address"
			label="地址"
			min-width="400"
		>
		</el-table-column>
		<el-table-column prop="zip" align="center" label="邮编" min-width="120">
		</el-table-column>
		<el-table-column header-align="center" label="操作" min-width="100">
			<template #default="scope">
				<div class="flex-ac">
					<el-button @click="handleClick(scope.row)" type="text" size="small"
						>查看</el-button
					>
					<el-button type="text" size="small">编辑</el-button>
				</div>
			</template>
		</el-table-column>
	</el-table>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
	setup() {
		const tableData = [
			{
				date: "2016-05-02",
				name: "王小虎",
				province: "上海",
				city: "普陀区",
				address:
					"上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄",
				zip: 200333,
			},
			{
				date: "2016-05-04",
				name: "王小虎",
				province: "上海",
				city: "普陀区",
				address: "上海市普陀区金沙江路 1517 弄",
				zip: 200333,
			},
			{
				date: "2016-05-01",
				name: "王小虎",
				province: "上海",
				city: "普陀区",
				address: "上海市普陀区金沙江路 1519 弄",
				zip: 200333,
			},
			{
				date: "2016-05-03",
				name: "王小虎",
				province: "上海",
				city: "普陀区",
				address: "上海市普陀区金沙江路 1516 弄",
				zip: 200333,
			},
		];

		return {
			tableData,
			searchVal: ref(""),
		};
	},
};
</script>

<style lang="scss" scoped>
.input-with-search {
	max-width: 400px;
}
</style>
