<template>
	<div class="common-layout">
		<el-container>
			<el-aside width="auto"><vSidebar /></el-aside>
			<el-container>
				<el-header><vHeader /></el-header>
				<el-main><vAppMain /></el-main>
				<el-footer><vFooter /></el-footer>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts" setup>
import vHeader from "./components/Header/index.vue";
import vFooter from "./components/Footer/index.vue";
import vSidebar from "./components/Sidebar/index.vue";
import vAppMain from "./components/AppMain/index.vue";
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
    padding: 0 30px;
}

.el-header {
	/* background: #d3dce6; */
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
	/* background: #f3f3f3; */
	color: var(--el-text-color-primary);
	/* text-align: center; */
	/* line-height: 160px; */

	/*120 = header + footer   */
	/* min-height: calc(100vh - 120px); */
	height: calc(100vh - 120px);
	width: 100%;
	position: relative;
	overflow: hidden;
	padding: 0 30px;
}


</style>
