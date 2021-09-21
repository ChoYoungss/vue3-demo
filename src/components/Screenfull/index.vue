<template>
	<!-- <svg-icon
			:name="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
			@click="handleFullScreen"
		/> -->
	<!-- <i
			:class="isFullscreen ? 'el-icon-rank' : 'el-icon-full-screen'"
			@click="handleFullScreen"
		></i> -->
	<el-icon size="26" class="mr-15">
		<FullScreen @click="handleFullScreen" />
	</el-icon>
</template>

<script lang="ts">
import screenfull, { Screenfull } from "screenfull";
import { ElMessage } from "element-plus";
import { ref } from "vue";
import { FullScreen } from "@element-plus/icons";
export default {
	components: {
		FullScreen,
	},
	setup() {
		let isFullscreen = ref(false);
		const change = () => {
			// 要引入 Screenfull 这个接口，并做一下类型断言(screenfull as Screenfull),不这样ts编译通不过。
			isFullscreen.value = (screenfull as Screenfull).isFullscreen;
		};
		// 全屏事件
		const handleFullScreen = () => {
			if (!screenfull.isEnabled) {
				// 如果不允许进入全屏，发出不允许提示
				ElMessage({
					message: "暂不不支持全屏",
					type: "warning",
				});
				return false;
			}
			screenfull.toggle();
		};
		if (screenfull.isEnabled) {
			screenfull.on("change", change);
		}
		return {
			change,
			isFullscreen,
			handleFullScreen,
		};
	},
};
</script>

<style scoped>
.screenfull-svg {
	display: inline-block;
	cursor: pointer;
	fill: #5a5e66;
	width: 20px;
	height: 20px;
	vertical-align: 10px;
}
</style>
