<template>
	<toggleBar :isCollapse="isCollapse" @click="handleToggle" />

	<section class="app-main">
		<router-view v-slot="{ Component }" :key="Component">
			<transition name="fade-transform" mode="out-in">
				<keep-alive>
					<component :is="Component"></component>
				</keep-alive>
			</transition>
		</router-view>
	</section>
</template>

<script lang="ts">
import toggleBar from "../../components/toggleBar.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
export default {
	name: "vAppMain",
	components: {
		toggleBar,
	},
	emits: ["toggleBar"],
	setup(props: any, { emit }: any) {
		const router = useRouter();
		const Component = computed(() => {
			return router.currentRoute.value.path;
		});

		const store = useStore();
		// console.log(store);

		const handleToggle = () => {
			store.dispatch("toggleSideBar");
		};
		return {
			Component,
			handleToggle,
			isCollapse: computed(() => store.state.sidebar.opened),
		};
	},
};
</script>

<style lang="scss" scoped>
.app-main {
	width: 100%;
	height: 100%;
	// border: 1px solid red;
	position: relative;
	overflow: auto;
}
</style>
