<template>
	<div class="v-header">
		<Screenfull />
		<el-dropdown>
			<el-avatar :src="avatar"></el-avatar>
			<template #dropdown>
				<el-dropdown-menu>
					<router-link to="/home">
						<el-dropdown-item> Home </el-dropdown-item>
					</router-link>
					<el-dropdown-item divided>
						<span style="display: block">Log Out</span></el-dropdown-item
					>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</div>
</template>

<script lang="ts">
import avatar from "@/assets/logo.png";
import Screenfull from "@/components/Screenfull/index.vue";
export default {
	name: "vHeader",

	components: {
		Screenfull,
	},
	setup() {
		return {
			avatar,
		};
	},
};
</script>

<style scoped>
.v-header {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	border-bottom: 1px solid #f3f3f3;
}

.el-dropdown-link {
	cursor: pointer;
	color: #409eff;
}
.el-icon-arrow-down {
	font-size: 12px;
}

.router-link-active {
	text-decoration: none;
}
</style>
