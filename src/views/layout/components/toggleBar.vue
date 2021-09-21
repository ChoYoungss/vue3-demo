<template>
	<div :class="['toggle-bar', customClass]">
		<div :class="['bar-box', isCollapse ? 'bar-reverse' : '']">
			<span></span>
			<span></span>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "toggleBar",
	props: {
		isCollapse: {
			type: Boolean,
			default: true,
		},
		customClass: {
			type: String,
			default: "",
		},
	},
};
</script>

<style scoped>
.toggle-bar {
	width: 30px;
	height: 100%;
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	left: 0;
	top: 0;
}

.bar-box {
	width: 20px;
	height: 120px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

.bar-box span {
	display: inline-block;
	width: 4px;
	height: 38px;
	background: rgba(191, 191, 191, 1);
	transition: 0.3s;
	border-radius: 2px;
}

.bar-box span:nth-child(2) {
	position: relative;
	top: -5px;
}

.bar-box:hover.bar-box span:nth-child(1) {
	height: 42px;
	transform: rotate(16deg);
	background-color: rgba(153, 153, 153, 1);
}

.bar-box:hover.bar-box span:nth-child(2) {
	height: 42px;
	transform: rotate(-16deg);
	background-color: rgba(153, 153, 153, 1);
}

.bar-reverse:hover.bar-box span:nth-child(1) {
	height: 42px;
	transform: rotate(-16deg);
	background-color: rgba(153, 153, 153, 1);
}

.bar-reverse:hover.bar-box span:nth-child(2) {
	height: 42px;
	transform: rotate(16deg);
	background-color: rgba(153, 153, 153, 1);
}
</style>
