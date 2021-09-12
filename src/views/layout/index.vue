<template>
	<div class="common-layout">
		<el-container>
			<el-header>Header</el-header>
			<el-container>
				<!-- <el-aside :width="isCollapse?'auto':'230px'"><vSidebar @toggleBar="toggleBar" /></el-aside> -->
				<el-aside width="auto"><vSidebar @toggleBar="toggleBar" /></el-aside>
				<el-container>
					<el-main><vAppMain /></el-main>
					<el-footer><vFooter /></el-footer>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts" setup>
import vFooter from "./components/Footer/index.vue";
import vSidebar from "./components/Sidebar/index.vue";
import vAppMain from "./components/AppMain/index.vue";
import { ref } from "vue";
let isCollapse = ref(false);
const toggleBar = (e: any) => {
	console.log(e);
	isCollapse.value = e;
};
</script>

<style scoped>
.common-layout {
	position: relative;
	height: 100%;
	width: 100%;
}
.el-header,
.el-footer {
	background-color: #fff;
	color: var(--el-text-color-primary);
	text-align: center;
	line-height: 60px;
}

.el-header {
	background: #d3dce6;
}

.el-aside {
	background-color: #fff;
	color: var(--el-text-color-primary);
	/* display: flex; */
	/* text-align: center; */
	/* line-height: 200px; */
}

.el-main {
	/* background-color: #fff; */
	background: #f3f3f3;
	color: var(--el-text-color-primary);
	text-align: center;
	line-height: 160px;

	/*120 = header + footer   */
	min-height: calc(100vh - 120px);
	width: 100%;
	position: relative;
	overflow: hidden;
}

body > .el-container {
	margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
	line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
	line-height: 320px;
}
</style>
