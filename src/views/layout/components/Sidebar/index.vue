<template>
	<el-scrollbar>
		<el-menu
			:uniqueOpened="true"
			:default-active="activeMenu"
			class="el-menu-vertical-demo sidebar"
			:collapse="isCollapse"
			background-color="#545c64"
			text-color="#fff"
			active-text-color="#ffd04b"
			:router="true"
		>
			<el-menu-item index="/" route="/" class="sidebar-logo">
				<el-image
					style="width: 32px; height: 32px"
					class="mr-10"
					:src="logo"
				></el-image>
				<template #title>
					<span class="font-20">Polaris</span>
					<span class="ml-20 mt-10 font-12">dev</span>
				</template>
			</el-menu-item>
			<el-menu-item index="/home" route="/home">
				<i class="el-icon-menu"></i>
				<template #title>首页</template>
			</el-menu-item>
			<el-menu-item index="/formTable" route="/formTable">
				<i class="el-icon-s-grid"></i>
				<template #title>表格页</template>
			</el-menu-item>
		</el-menu>
	</el-scrollbar>
</template>

<script lang="ts">
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import logo from "@/assets/logo.png";
export default {
	name: "sidebar",

	setup(props: any, { emit }: any) {
		const store = useStore();
		const activeMenu = computed(() => {
			const route = useRoute();
			const { meta, path } = route;
			// if set path, the sidebar will highlight the path you set
			if (meta.activeMenu) {
				return meta.activeMenu;
			}
			return path;
		});

		return {
			logo,
			activeMenu,
			isCollapse: computed(() => store.state.sidebar.opened),
		};
	},
};
</script>

<style lang="scss" scoped>
.sidebar {
	height: 100vh;
	background-color: rgb(84, 92, 100);
	overflow: hidden;
}

.sidebar-logo {
	height: 60px;
	line-height: 60px;
	padding: 0 10px !important;
	background: #202637 !important;
	color: #627597 !important;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	min-height: 400px;
}
</style>
