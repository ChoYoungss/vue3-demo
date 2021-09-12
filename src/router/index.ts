import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

/* Layout */
import Layout from "@/views/layout/index.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "login",
		component: () => import("@/views/login/index.vue"),
	},
	{
		path: "/home",
		component: Layout,
		children: [
			{
				path: "home",
				name: "home",
				component: () => import("@/views/home/index.vue"),
				meta: { title: "Home", icon: "form" },
			},
		],
	},
	{
		path: "/vuex",
		name: "Vuex",
		component: () => import("@/views/vuex.vue"),
	},
	{
		path: "/axios",
		name: "Axios",
		component: () => import("@/views/axios.vue"), // 懒加载组件
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
